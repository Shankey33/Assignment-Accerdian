import { NextResponse } from "next/server";
import { testimonials } from "@/data/content";

export async function GET() {
  return NextResponse.json({ success: true, data: testimonials });
}
