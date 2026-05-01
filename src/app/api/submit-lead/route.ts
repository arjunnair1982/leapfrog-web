import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = encodeURIComponent(JSON.stringify(body));

    if (!process.env.GOOGLE_SCRIPT_URL) {
      return NextResponse.json(
        { error: "Configuration error" },
        { status: 500 }
      );
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(`${process.env.GOOGLE_SCRIPT_URL}?data=${data}`, {
      method: "GET",
      signal: controller.signal,
    });

    clearTimeout(timeout);

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
