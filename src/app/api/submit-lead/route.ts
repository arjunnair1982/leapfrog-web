import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!process.env.GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SCRIPT_URL is not set");
      return NextResponse.json(
        { error: "Configuration error" },
        { status: 500 }
      );
    }

    const res = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      redirect: "follow",
      body: JSON.stringify(body),
    });

    console.log("Google Script response status:", res.status);

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("Google Script error:", res.status, text);
      throw new Error("Failed to save lead");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Google Sheets error:", error);
    return NextResponse.json(
      { error: "Failed to save lead" },
      { status: 500 }
    );
  }
}
