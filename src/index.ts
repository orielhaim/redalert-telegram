import { startBot } from "./bot";
import { connectSocket, disconnectSocket } from "./socket";

async function main(): Promise<void> {
  console.log("=================================");
  console.log("  RedAlert Telegram Bot");
  console.log("=================================\n");

  await startBot();

  connectSocket();

  console.log("\n[System] Bot is running. Press Ctrl+C to stop.\n");
}

process.on("SIGINT", () => {
  console.log("\n[System] Shutting down...");
  disconnectSocket();
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("\n[System] Shutting down...");
  disconnectSocket();
  process.exit(0);
});

main().catch((error) => {
  console.error("[System] Fatal error:", error);
  process.exit(1);
});
