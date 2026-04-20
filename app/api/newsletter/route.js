import { NextResponse } from 'next/server';

export async function POST(request) {
  const payload = await request.json();
  const email = String(payload.email || '').trim();

  if (!email) {
    return NextResponse.json({ message: 'Please provide an email address.' }, { status: 400 });
  }

  return NextResponse.json({ message: 'Thanks for subscribing.' });
}