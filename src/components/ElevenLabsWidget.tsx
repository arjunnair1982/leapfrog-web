"use client";

import { useEffect, useRef } from "react";

export function ElevenLabsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    console.log("[elevenlabs] Component mounted, loading script...");

    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.onload = () => console.log("[elevenlabs] Script loaded successfully");
    script.onerror = () => console.error("[elevenlabs] Script failed to load");
    document.body.appendChild(script);

    const widget = document.createElement("elevenlabs-convai");
    widget.setAttribute("agent-id", "agent_8901kqh82m9mf0rswmqwmczk9vgg");
    widget.style.display = "none";

    if (containerRef.current) {
      containerRef.current.appendChild(widget);
      widgetElementRef.current = widget;
      console.log("[elevenlabs] Widget element created and appended");
    }

    return () => {
      document.body.removeChild(script);
      if (containerRef.current && containerRef.current.contains(widget)) {
        containerRef.current.removeChild(widget);
      }
      console.log("[elevenlabs] Component unmounted");
    };
  }, []);

  useEffect(() => {
    const handleStartAgent = () => {
      console.log("[elevenlabs] Received start-elevenlabs-agent event");
      const widget = document.querySelector("elevenlabs-convai");
      console.log("[elevenlabs] Widget element found:", !!widget);
      console.log("[elevenlabs] Widget methods:", widget ? Object.keys(widget).filter(k => typeof (widget as any)[k] === "function") : "none");
      
      if (widget && typeof (widget as any).startConversation === "function") {
        console.log("[elevenlabs] Calling startConversation()");
        try {
          (widget as any).startConversation();
          console.log("[elevenlabs] startConversation() called successfully");
        } catch (err) {
          console.error("[elevenlabs] startConversation() error:", err);
        }
      } else {
        console.error("[elevenlabs] startConversation method not found on widget");
      }
    };

    window.addEventListener("start-elevenlabs-agent", handleStartAgent);
    return () => window.removeEventListener("start-elevenlabs-agent", handleStartAgent);
  }, []);

  return <div ref={containerRef} />;
}
