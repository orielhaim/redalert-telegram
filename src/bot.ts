import { Bot } from "grammy";

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN is missing in .env");
}

if (!CHAT_ID) {
  throw new Error("CHAT_ID is missing in .env");
}

const bot = new Bot(BOT_TOKEN);

export async function sendAlert(message: string): Promise<void> {
  try {
    await bot.api.sendMessage(CHAT_ID!, message);
    console.log("[Bot] Message sent successfully");
  } catch (error) {
    console.error("[Bot] Failed to send message:", error);
  }
}

export async function startBot(): Promise<void> {
  try {
    const me = await bot.api.getMe();
    console.log(`[Bot] Connected as @${me.username}`);
  } catch (error) {
    throw new Error(`[Bot] Failed to connect: ${error}`);
  }
}

export { bot };
