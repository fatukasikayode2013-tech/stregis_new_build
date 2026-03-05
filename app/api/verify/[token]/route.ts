import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { getReservation, deleteReservation } from '../../../../app/lib/reservations';
import { getRoomDetails } from '../../../../app/lib/roomData';

const INFO_EMAIL = 'info@stregishotelandresort.com';
const RESERVATIONS_EMAIL = 'reservations@stregishotelandresort.com';

export async function GET(request: Request, { params }: { params: { token: string } }) {
  try {
    const token = params.token;
    const query = new URL(request.url).searchParams;

    // try reading stored reservation (may not exist in serverless env)
    const entry = getReservation(token);

    // if store empty, fall back to query parameters provided in link
    const data = entry || {
      name: query.get('name') || undefined,
      email: query.get('email') || undefined,
      phone: query.get('phone') || undefined,
      checkin: query.get('checkin') || undefined,
      checkout: query.get('checkout') || undefined,
      roomType: query.get('roomType') || undefined,
      message: undefined,
    };

    if (!entry && !query.has('email')) {
      return NextResponse.json({ error: 'Invalid or expired verification link.' }, { status: 410 });
    }

    const user = process.env.ZOHO_USER;
    const pass = process.env.ZOHO_PASS;
    
    // Determine the site URL - always use request host for redirects to handle domain aliases properly
    const requestUrl = new URL(request.url);
    const currentHost = requestUrl.host;
    const currentProtocol = requestUrl.protocol;
    const siteUrl = `${currentProtocol}//${currentHost}`;

    if (!user || !pass) {
      return NextResponse.json({ error: 'Server misconfiguration: SMTP not set.' }, { status: 500 });
    }

    const host = process.env.ZOHO_HOST || 'smtp.zoho.com';
    const port = parseInt(process.env.ZOHO_PORT || '587', 10);
    const secure = (process.env.ZOHO_SECURE === 'true') || port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    // send email to hotel
    const hotelRoomDetails = getRoomDetails(data.roomType || '');
    
    const specialRequestsRow = data.message 
      ? `<div class="detail-row"><span class="detail-label">Special Requests:</span><span class="detail-value">${data.message}</span></div>`
      : '';
    
    const roomInfoSection = hotelRoomDetails 
      ? `<h3>Room Information</h3>
         <div class="room-info-box">
           <div class="room-title">${hotelRoomDetails.name}</div>
           <div class="room-capacity">👥 Capacity: ${hotelRoomDetails.capacity}</div>
           <p style="color: #555; margin: 10px 0; line-height: 1.5;">${hotelRoomDetails.description}</p>
           <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd;">
             <div style="margin-bottom: 8px;"><strong>Bed Configuration:</strong> ${hotelRoomDetails.beds}</div>
             <div><strong>Price Range:</strong> <span style="color: #c9a961; font-weight: bold;">${hotelRoomDetails.pricePerNight}</span> per night</div>
           </div>
         </div>`
      : '';
    
    const hotelBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; color: #333; }
            .header { background-color: #1e3a5f; color: white; padding: 20px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; }
            .content { padding: 20px; max-width: 700px; margin: 0 auto; }
            .alert-box { background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 5px; }
            .guest-info-box { background-color: #e8f4f8; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #0288d1; }
            .reservation-box { background-color: #f5f3ee; padding: 15px; border-radius: 5px; margin: 15px 0; }
            .room-info-box { background: linear-gradient(135deg, #f5f3ee 0%, #fffbf5 100%); padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #c9a961; }
            .detail-row { padding: 8px 0; border-bottom: 1px solid #ddd; display: flex; justify-content: space-between; }
            .detail-row:last-child { border-bottom: none; }
            .detail-label { font-weight: bold; color: #1e3a5f; }
            .detail-value { color: #555; }
            .action-box { background-color: #f0f7f4; padding: 15px; border-radius: 5px; margin: 15px 0; border: 2px solid #28a745; }
            .action-title { color: #28a745; font-weight: bold; margin-bottom: 10px; font-size: 16px; }
            .action-list { list-style: none; padding-left: 0; }
            .action-list li { padding: 8px 0; color: #555; display: flex; align-items: flex-start; }
            .action-list li:before { content: "□ "; color: #28a745; font-weight: bold; margin-right: 10px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 11px; border-top: 1px solid #ddd; margin-top: 30px; }
            .contact-link { color: #c9a961; text-decoration: none; font-weight: bold; }
            h3 { color: #1e3a5f; margin-top: 20px; margin-bottom: 12px; font-size: 16px; }
            .room-title { color: #1e3a5f; font-size: 18px; font-weight: bold; margin-bottom: 8px; }
            .room-capacity { color: #c9a961; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📋 New Verified Reservation</h1>
          </div>
          <div class="content">
            <div class="alert-box">
              <strong>⚠️ ACTION REQUIRED:</strong> A guest has verified their email and submitted a reservation request. Please review and process below.
            </div>

            <h3>Guest Information</h3>
            <div class="guest-info-box">
              <div class="detail-row">
                <span class="detail-label">Name:</span>
                <span class="detail-value">${data.name || '—'}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Email:</span>
                <span class="detail-value"><a href="mailto:${data.email}" class="contact-link">${data.email || '—'}</a></span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Phone:</span>
                <span class="detail-value"><a href="tel:${data.phone}" class="contact-link">${data.phone || '—'}</a></span>
              </div>
            </div>

            <h3>Reservation Details</h3>
            <div class="reservation-box">
              <div class="detail-row">
                <span class="detail-label">Check-in Date:</span>
                <span class="detail-value"><strong>${data.checkin || '—'}</strong></span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Check-out Date:</span>
                <span class="detail-value"><strong>${data.checkout || '—'}</strong></span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Room Type Requested:</span>
                <span class="detail-value"><strong>${data.roomType || '—'}</strong></span>
              </div>
              ${specialRequestsRow}
            </div>

            ${roomInfoSection}

            <h3>Next Steps</h3>
            <div class="action-box">
              <div class="action-title">✓ Required Actions:</div>
              <ul class="action-list">
                <li>Check availability for ${data.roomType || 'requested room'} on ${data.checkin} - ${data.checkout}</li>
                <li>If available: Send guest booking confirmation email with account details, payment terms, and check-in instructions</li>
                <li>If NOT available: Contact guest immediately to offer alternative room options or dates</li>
                <li>Process payment/deposit if required by hotel policy</li>
              </ul>
            </div>

            <h3>Guest Contact</h3>
            <p>
              📧 <a href="mailto:${data.email}" class="contact-link">${data.email}</a><br/>
              📱 <a href="tel:${data.phone}" class="contact-link">${data.phone || 'Not provided'}</a>
            </p>

            <p style="margin-top: 30px; padding: 15px; background-color: #f9f9f9; border-radius: 5px; font-size: 13px;">
              <strong>Note:</strong> This reservation was submitted via the website at <strong>${siteUrl}</strong>. 
              Guest email has been verified. Keep this email for your records and follow up within 24 hours for best results.
            </p>
          </div>
          <div class="footer">
            <p>St. Regis Hotel & Resort | 7 Osagiede Street, Oka, Benin City, Edo State, Nigeria</p>
            <p>© 2026 St. Regis Hotel & Resort. All rights reserved.</p>
          </div>
        </body>
      </html>
    `;

    // Send email to hotel (non-blocking)
    transporter.sendMail({
      from: user,
      to: `${RESERVATIONS_EMAIL}, ${INFO_EMAIL}`,
      cc: undefined,
      subject: `[NEW VERIFIED RESERVATION] ${data.name || 'Guest'} - ${data.roomType || 'Room'} on ${data.checkin}`, 
      html: hotelBody,
      replyTo: data.email || undefined,
    }).then(() => {
      console.log(`✓ Reservation notification sent to ${RESERVATIONS_EMAIL} and ${INFO_EMAIL}`);
    }).catch((err) => {
      console.error(`✗ Failed to send reservation email to hotel:`, err.message);
      console.error('SMTP Config:', { 
        host: process.env.ZOHO_HOST, 
        port: process.env.ZOHO_PORT,
        user: process.env.ZOHO_USER ? '***' : 'NOT SET',
        recipientEmails: `${RESERVATIONS_EMAIL}, ${INFO_EMAIL}`
      });
    });

    // send confirmation to guest
    const roomDetails = getRoomDetails(data.roomType || '');
    const amenitiesList = roomDetails 
      ? roomDetails.amenities.map(a => `<li style="margin-bottom: 8px;">${a}</li>`).join('')
      : '';
    const highlightsList = roomDetails
      ? roomDetails.highlights.map(h => `<li style="margin-bottom: 8px;">${h}</li>`).join('')
      : '';

    const specialRequestsHTML = data.message 
      ? `<div class="detail-row"><span class="detail-label">Special Requests:</span> ${data.message}</div>`
      : '';

    const roomDetailsHTML = roomDetails 
      ? `<h3>Room Information</h3>
         <div class="room-details-box">
           <div class="room-title">${roomDetails.name}</div>
           <p class="room-description">${roomDetails.description}</p>
           
           <div class="section-title">Room Configuration</div>
           <div class="detail-row">
             <span class="detail-label">Capacity:</span> ${roomDetails.capacity}
           </div>
           <div class="detail-row">
             <span class="detail-label">Bed Configuration:</span> ${roomDetails.beds}
           </div>
           <div class="detail-row" style="border-bottom: none;">
             <span class="detail-label">Estimated Price:</span> <span style="color: #c9a961; font-weight: bold;">${roomDetails.pricePerNight} per night</span>
           </div>

           ${amenitiesList ? `<div class="section-title">In-Room Amenities</div>
           <ul class="amenities-list">
             ${amenitiesList}
           </ul>` : ''}

           ${highlightsList ? `<div class="section-title">Room Highlights</div>
           <ul class="highlights-list">
             ${highlightsList}
           </ul>` : ''}
         </div>`
      : '';

    const guestBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; color: #333; }
            .header { background-color: #1e3a5f; color: white; padding: 20px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; }
            .content { padding: 20px; max-width: 650px; margin: 0 auto; }
            .confirmation-box { background-color: #d4f1d4; border-left: 4px solid #28a745; padding: 15px; margin: 20px 0; border-radius: 5px; }
            .details-box { background-color: #f5f3ee; padding: 15px; border-radius: 5px; margin: 15px 0; }
            .room-details-box { background: linear-gradient(135deg, #f5f3ee 0%, #fffbf5 100%); padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #c9a961; }
            .room-title { color: #1e3a5f; font-size: 24px; font-weight: bold; margin-bottom: 10px; border-bottom: 2px solid #c9a961; padding-bottom: 10px; }
            .room-description { color: #555; line-height: 1.6; margin-bottom: 15px; font-style: italic; }
            .detail-row { padding: 8px 0; border-bottom: 1px solid #ddd; }
            .detail-row:last-child { border-bottom: none; }
            .detail-label { font-weight: bold; color: #1e3a5f; }
            .section-title { color: #1e3a5f; font-size: 16px; font-weight: bold; margin-top: 15px; margin-bottom: 10px; }
            .amenities-list { list-style: none; padding-left: 0; }
            .amenities-list li { color: #555; padding: 6px 0; display: flex; align-items: flex-start; }
            .amenities-list li:before { content: "✓ "; color: #c9a961; font-weight: bold; margin-right: 10px; }
            .highlights-list { list-style: none; padding-left: 0; }
            .highlights-list li { color: #555; padding: 6px 0; display: flex; align-items: flex-start; }
            .highlights-list li:before { content: "★ "; color: #c9a961; margin-right: 10px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; border-top: 1px solid #ddd; margin-top: 30px; }
            .phone { color: #c9a961; font-weight: bold; }
            a { color: #c9a961; text-decoration: none; }
            h3 { color: #1e3a5f; margin-bottom: 12px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>✓ Reservation Verified</h1>
          </div>
          <div class="content">
            <p>Dear ${data.name || 'Valued Guest'},</p>
            <div class="confirmation-box">
              <p><strong>Thank you for requesting a reservation at St. Regis Hotel & Resort.</strong></p>
              <p>Your email has been verified and we have received your reservation request. Our reservations team is now reviewing your booking and will contact you shortly to confirm availability and finalize the details.</p>
            </div>
            
            <h3>Your Reservation Details</h3>
            <div class="details-box">
              <div class="detail-row">
                <span class="detail-label">Name:</span> ${data.name || '—'}
              </div>
              <div class="detail-row">
                <span class="detail-label">Email:</span> ${data.email || '—'}
              </div>
              <div class="detail-row">
                <span class="detail-label">Phone:</span> ${data.phone || '—'}
              </div>
              <div class="detail-row">
                <span class="detail-label">Check-in:</span> ${data.checkin || '—'}
              </div>
              <div class="detail-row">
                <span class="detail-label">Check-out:</span> ${data.checkout || '—'}
              </div>
              <div class="detail-row">
                <span class="detail-label">Room Type:</span> <strong>${data.roomType || '—'}</strong>
              </div>
              ${specialRequestsHTML}
            </div>

            ${roomDetailsHTML}

            <h3>What's Next?</h3>
            <p>Our reservation team will review your request and contact you within 24 hours to:</p>
            <ul style="color: #555;">
              <li>Confirm room availability for your requested dates</li>
              <li>Provide final pricing and available packages</li>
              <li>Answer any questions you may have</li>
              <li>Process and finalize your booking</li>
            </ul>

            <h3>Need Immediate Assistance?</h3>
            <p>Feel free to contact us directly:</p>
            <p><span class="phone">+234 906 000 1732</span><br/>
            <a href="mailto:reservations@stregishotelandresort.com">reservations@stregishotelandresort.com</a></p>
            <p style="margin-top: 20px;">We look forward to welcoming you to St. Regis Hotel & Resort!</p>
            <p><strong>Best regards,</strong><br/>St. Regis Reservations Team</p>
          </div>
          <div class="footer">
            <p>St. Regis Hotel & Resort | 7 Osagiede Street, Oka, Benin City, Edo State, Nigeria</p>
            <p>© 2026 St. Regis Hotel & Resort. All rights reserved.</p>
          </div>
        </body>
      </html>
    `;

    if (data.email) {
      transporter.sendMail({
        from: user,
        to: data.email,
        subject: 'Reservation verified — St. Regis',
        html: guestBody,
      }).catch((err) => {
        console.error('Failed to send guest confirmation email:', err.message);
      });
    }

    await deleteReservation(token);

    // Redirect to confirmation page with guest details
    const redirectParams = new URLSearchParams({
      name: data.name || '',
      email: data.email || '',
      phone: data.phone || '',
      checkin: data.checkin || '',
      checkout: data.checkout || '',
      roomType: data.roomType || '',
    });
    return NextResponse.redirect(new URL(`/confirmation?${redirectParams.toString()}`, siteUrl), { status: 302 });
  } catch (err: any) {
    console.error('verify error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
