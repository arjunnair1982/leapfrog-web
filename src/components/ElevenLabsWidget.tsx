"use client";

import { Conversation } from "@elevenlabs/client";

export function startAgent() {
  console.log("[elevenlabs] startAgent called");
  console.log("[elevenlabs] agentId: agent_8901kqh82m9mf0rswmqwmczk9vgg");

  Conversation.startSession({
    agentId: "agent_8901kqh82m9mf0rswmqwmczk9vgg",
    onConnect: ({ conversationId }) => {
      console.log("[elevenlabs] Connected. conversationId:", conversationId);
    },
    onDisconnect: () => {
      console.log("[elevenlabs] Disconnected");
    },
    onMessage: (message) => {
      console.log("[elevenlabs] Message:", message);
    },
    onError: (error) => {
      console.error("[elevenlabs] Error:", error);
    },
    onStatusChange: (status) => {
      console.log("[elevenlabs] Status change:", status);
    },
  })
  .then((session) => {
    console.log("[elevenlabs] Session started successfully");
  })
  .catch((err) => {
    console.error("[elevenlabs] startSession failed:", err);
  });
}
