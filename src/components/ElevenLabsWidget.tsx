"use client";

import { useEffect, useRef } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "agent-id": string;
          id?: string;
          "start-call-text"?: string;
          "end-call-text"?: string;
          "action-text"?: string;
          "listening-text"?: string;
          "speaking-text"?: string;
          "expand-text"?: string;
        },
        HTMLElement
      >;
    }
  }
}

export function ElevenLabsWidget() {
  const widgetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleStartAgent = () => {
      if (widgetRef.current && typeof (widgetRef.current as any).startConversation === "function") {
        (widgetRef.current as any).startConversation();
      }
    };

    window.addEventListener("start-elevenlabs-agent", handleStartAgent);
    return () => window.removeEventListener("start-elevenlabs-agent", handleStartAgent);
  }, []);

  return (
    <elevenlabs-convai
      ref={widgetRef}
      id="elevenlabs-widget"
      agent-id="agent_8901kqh82m9mf0rswmqwmczk9vgg"
      style={{ display: "none" }}
    />
  );
}
