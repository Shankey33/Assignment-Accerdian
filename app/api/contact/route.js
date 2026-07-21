import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body || {};

    if (!name || !email || !company) {
      return NextResponse.json(
        { success: false, error: "Name, email, and company are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Thanks ${name}, our team will reach out to you at ${email} shortly.`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please Call Directly on this number +91-1800-123456." },
      { status: 500 }
    );
  }
}
