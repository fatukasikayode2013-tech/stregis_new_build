import fs from 'fs/promises';
import path from 'path';

type Reservation = {
  name?: string;
  email?: string;
  phone?: string;
  checkin?: string;
  checkout?: string;
  roomType?: string;
  message?: string;
  createdAt: number;
  expiresAt: number;
};

const store = new Map<string, Reservation>();
const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'reservations.json');

async function ensureDataFile() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.stat(DATA_FILE);
    } catch {
      await fs.writeFile(DATA_FILE, JSON.stringify({}), 'utf8');
    }
    return true;
  } catch (err) {
    // Filesystem not writable in some serverless environments
    return false;
  }
}

async function persistStoreToFile() {
  const ok = await ensureDataFile();
  if (!ok) return false;
  const obj: Record<string, Reservation> = {};
  for (const [k, v] of store.entries()) obj[k] = v;
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(obj, null, 2), 'utf8');
    return true;
  } catch (err) {
    return false;
  }
}

async function loadStoreFromFile() {
  const ok = await ensureDataFile();
  if (!ok) return;
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf8');
    const obj = raw ? JSON.parse(raw || '{}') : {};
    for (const k of Object.keys(obj)) {
      store.set(k, obj[k]);
    }
  } catch (err) {
    // ignore and keep in-memory
  }
}

// try to hydrate store on import (best-effort)
loadStoreFromFile();

export async function saveReservation(token: string, data: Omit<Reservation, 'createdAt' | 'expiresAt'>, ttl = 1000 * 60 * 60) {
  const now = Date.now();
  const entry: Reservation = { ...data, createdAt: now, expiresAt: now + ttl };
  store.set(token, entry);
  await persistStoreToFile();
}

export function getReservation(token: string) {
  const entry = store.get(token);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    store.delete(token);
    // persist deletion (fire-and-forget)
    void persistStoreToFile();
    return null;
  }
  return entry;
}

export async function deleteReservation(token: string) {
  store.delete(token);
  await persistStoreToFile();
}

export async function cleanupExpired() {
  const now = Date.now();
  for (const [k, v] of store.entries()) {
    if (v.expiresAt <= now) store.delete(k);
  }
  await persistStoreToFile();
}

export default store;
