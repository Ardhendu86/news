import { NextResponse } from 'next/server';

export async function POST(request) {
  const payload = await request.json();
  const name = String(payload.name || '').trim();
  const email = String(payload.email || '').trim();
  const subject = String(payload.subject || '').trim();
  const message = String(payload.message || '').trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: 'Please fill in all contact fields.' }, { status: 400 });
  }

  return NextResponse.json({ message: 'Thanks. Your message has been received.' });
}