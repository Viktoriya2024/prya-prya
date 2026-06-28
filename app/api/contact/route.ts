import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const contactEmail = process.env.CONTACT_TO_EMAIL || 'test@example.com';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validation
    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: 'Ім\'я є обов\'язковим' },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Повідомлення є обов\'язковим' },
        { status: 400 }
      );
    }

    if (!email && !phone) {
      return NextResponse.json(
        { error: 'Email або телефон є обов\'язковим' },
        { status: 400 }
      );
    }

    // Format date and time
    const now = new Date();
    const dateTime = now.toLocaleString('uk-UA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    // Email HTML content
    const emailContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; line-height: 1.5; color: #333;">
        <h2 style="color: #2D241C; border-bottom: 3px solid #FF9800; padding-bottom: 10px;">Нове повідомлення з сайту ПРЯ-ПРЯ</h2>
        
        <div style="margin-top: 24px;">
          <p><strong>Ім'я:</strong> ${name}</p>
          ${email ? `<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>` : ''}
          ${phone ? `<p><strong>Телефон:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
          <p><strong>Дата та час:</strong> ${dateTime}</p>
        </div>

        <div style="margin-top: 24px;">
          <h3 style="color: #2D241C;">Повідомлення:</h3>
          <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 16px; border-radius: 8px;">${message}</p>
        </div>

        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666;">
          <p>Це автоматичне повідомлення. Будь ласка, не відповідайте на цей лист.</p>
        </div>
      </div>
    `;

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'noreply@resend.dev', // Resend requires this format for free tier
      to: contactEmail,
      subject: 'Нове повідомлення з сайту ПРЯ-ПРЯ',
      html: emailContent,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json(
        { error: 'Помилка відправки. Будь ласка, спробуйте ще раз.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Дякуємо! Ваше повідомлення надіслано.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Помилка відправки. Будь ласка, спробуйте ще раз.' },
      { status: 500 }
    );
  }
}
