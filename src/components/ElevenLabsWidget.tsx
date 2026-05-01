"use client";

import { useEffect, useRef } from "react";

export function ElevenLabsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    document.body.appendChild(script);

    const widget = document.createElement("elevenlabs-convai");
    widget.setAttribute("agent-id", "agent_8901kqh82m9mf0rswmqwmczk9vgg");
    widget.style.display = "none";

    if (containerRef.current) {
      containerRef.current.appendChild(widget);
    }

    return () => {
      document.body.removeChild(script);
      if (containerRef.current && containerRef.current.contains(widget)) {
        containerRef.current.removeChild(widget);
      }
    };
  }, []);

  useEffect(() => {
    const handleStartAgent = () => {
      const widget = document.querySelector("elevenlabs-convai");
      if (widget && typeof (widget as any).startConversation === "function") {
        (widget as any).startConversation();
      }
    };

    window.addEventListener("start-elevenlabs-agent", handleStartAgent);
    return () => window.removeEventListener("start-elevenlabs-agent", handleStartAgent);
  }, []);

  return <div ref={containerRef} />;
}
