import { io, type Socket } from "socket.io-client";
import type { RedAlert } from "./types";
import { loadTemplate, buildVariables } from "./templates/loader";
import { sendAlert } from "./bot";

const REDALERT_URL = "https://redalert.orielhaim.com";
const API_KEY = process.env.REDALERT_API_KEY || "";

let socket: Socket;

async function processAlert(alert: RedAlert): Promise<void> {
  const variables = buildVariables(
    alert.type,
    alert.title,
    alert.cities,
    alert.instructions
  );

  const message = loadTemplate(alert.type, variables);
  await sendAlert(message);
}

async function processEndAlert(alert: RedAlert): Promise<void> {
  const variables = buildVariables(
    "endAlert",
    alert.title,
    alert.cities,
    alert.instructions
  );

  const message = loadTemplate("endAlert", variables);
  await sendAlert(message);
}

export function connectSocket(): void {
  socket = io(REDALERT_URL, {
    auth: {
      apiKey: API_KEY,
    },
  });

  socket.on("connect", () => {
    console.log("[Socket] Connected to RedAlert");
  });

  socket.on("disconnect", (reason) => {
    console.log(`[Socket] Disconnected: ${reason}`);
  });

  socket.on("connect_error", (error) => {
    console.error("[Socket] Connection error:", error.message);
  });

  socket.on("alert", (alerts: RedAlert[]) => {
    console.log(`[Socket] Received ${alerts.length} alert(s)`);
    alerts.forEach((alert) => processAlert(alert));
  });

  socket.on("endAlert", (alert: RedAlert) => {
    console.log("[Socket] End alert received");
    processEndAlert(alert);
  });
}

export function disconnectSocket(): void {
  if (socket) {
    socket.disconnect();
  }
}
