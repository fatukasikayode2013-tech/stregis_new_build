export type ReservationInput = {
  name?: string;
  email?: string;
  phone?: string;
  checkin?: string;
  checkout?: string;
  roomType?: string;
  message?: string;
};

export function validateReservationInput(data: any): { ok: true; value: ReservationInput } | { ok: false; errors: string[] } {
  const errors: string[] = [];
  const normalized: ReservationInput = {};

  const name = typeof data?.name === 'string' ? data.name.trim() : '';
  const email = typeof data?.email === 'string' ? data.email.trim() : '';
  const phone = typeof data?.phone === 'string' ? data.phone.trim() : '';
  const checkin = typeof data?.checkin === 'string' ? data.checkin.trim() : '';
  const checkout = typeof data?.checkout === 'string' ? data.checkout.trim() : '';
  const roomType = typeof data?.roomType === 'string' ? data.roomType.trim() : '';
  const message = typeof data?.message === 'string' ? data.message.trim() : '';

  if (!name) errors.push('Guest name is required.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('A valid email address is required.');
  if (!checkin) errors.push('Check-in date is required.');
  if (!checkout) errors.push('Check-out date is required.');
  if (!roomType) errors.push('Room type is required.');

  if (checkin && checkout) {
    const checkInDate = new Date(checkin);
    const checkOutDate = new Date(checkout);
    if (Number.isNaN(checkInDate.getTime()) || Number.isNaN(checkOutDate.getTime())) {
      errors.push('Check-in and check-out dates must be valid dates.');
    } else if (checkOutDate <= checkInDate) {
      errors.push('Check-out date must be after the check-in date.');
    }
  }

  if (errors.length > 0) return { ok: false, errors };

  normalized.name = name;
  normalized.email = email;
  normalized.phone = phone || undefined;
  normalized.checkin = checkin;
  normalized.checkout = checkout;
  normalized.roomType = roomType;
  normalized.message = message || undefined;

  return { ok: true, value: normalized };
}
