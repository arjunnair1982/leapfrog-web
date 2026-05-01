import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("[submit-lead] API route called");

  try {
    const body = await req.json();
    console.log("[submit-lead] Request body:", JSON.stringify(body));

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    console.log("[submit-lead] GOOGLE_SCRIPT_URL present:", !!scriptUrl);
    console.log("[submit-lead] GOOGLE_SCRIPT_URL value:", scriptUrl ? scriptUrl.substring(0, 30) + "..." : "MISSING");

    if (scriptUrl) {
      const data = encodeURIComponent(JSON.stringify(body));
      const url = `${scriptUrl}?data=${data}`;
      console.log("[submit-lead] Calling Google Script URL:", url.substring(0, 60) + "...");

      const response = await fetch(url, {
        method: "GET",
        redirect: "follow",
      });

      console.log("[submit-lead] Google Script response status:", response.status);
      const responseText = await response.text();
      console.log("[submit-lead] Google Script response body:", responseText);
    } else {
      console.log("[submit-lead] Skipping Google Script — no URL configured");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[submit-lead] Error:", error);
    return NextResponse.json(
      { error: "Failed to save lead" },
      { status: 500 }
    );
  }
}
