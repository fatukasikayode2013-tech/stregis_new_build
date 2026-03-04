import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { saveReservation } from '../../lib/reservations';

const INFO_EMAIL = 'info@stregishotelandresort.com';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, checkin, checkout, roomType, message } = data;

    const user = process.env.SMTP_USER || process.env.ZOHO_USER;
    const pass = process.env.SMTP_PASS || process.env.ZOHO_PASS;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `http://localhost:3000`;

    console.log('SMTP_USER:', !!process.env.SMTP_USER, 'ZOHO_USER:', !!process.env.ZOHO_USER);
    console.log('SMTP_PASS:', !!process.env.SMTP_PASS, 'ZOHO_PASS:', !!process.env.ZOHO_PASS);
    console.log('ZOHO_PASS length:', process.env.ZOHO_PASS?.length);
    console.log('ZOHO_USER value:', process.env.ZOHO_USER);

    if (!user) {
      return NextResponse.json({ ok: false, error: 'SMTP user not configured' }, { status: 500 });
    }
    if (!pass) {
      return NextResponse.json({ ok: false, error: 'SMTP password not configured' }, { status: 500 });
    }

    if (!email) {
      return NextResponse.json({ ok: false, error: 'Guest email is required for verification' }, { status: 400 });
    }

    // create token and save reservation for later verification
    const token = randomUUID();
    await saveReservation(token, { name, email, phone, checkin, checkout, roomType, message });

    const host = process.env.SMTP_HOST || process.env.ZOHO_HOST || 'smtp.zoho.com';
    const port = parseInt(process.env.SMTP_PORT || process.env.ZOHO_PORT || '587', 10);
    const secure = (process.env.SMTP_SECURE || process.env.ZOHO_SECURE === 'true') || port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const verifyUrl = `${siteUrl.replace(/\/$/, '')}/api/verify/${token}`;

    const mailBody = `
      <p>Hi ${name || 'Guest'},</p>
      <p>Thanks for requesting a reservation at St. Regis Hotel & Resort. Please verify your email by clicking the link below. Once verified, we will send your reservation to our reservations desk.</p>
      <p><a href="${verifyUrl}">Verify my reservation</a></p>
      <p>This link will expire in 1 hour.</p>
    `;

    await transporter.sendMail({
      from: user,
      to: email,
      subject: 'Please verify your reservation request — St. Regis',
      html: mailBody,
    });

    return NextResponse.json({ ok: true, message: 'verification_sent' });
  } catch (err: any) {
    console.error('send-reservation error', err);
    return NextResponse.json({ ok: false, error: err.message || String(err) }, { status: 500 });
  }
}
