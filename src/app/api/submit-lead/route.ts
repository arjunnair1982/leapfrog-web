import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (process.env.GOOGLE_SCRIPT_URL) {
    const data = encodeURIComponent(JSON.stringify(body));
    // Fire-and-forget — don't block the response
    fetch(`${process.env.GOOGLE_SCRIPT_URL}?data=${data}`).catch((err) => {
      console.error("Google Script error:", err);
    });
  }

  return NextResponse.json({ success: true });
}
