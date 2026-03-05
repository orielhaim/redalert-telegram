import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { TemplateVariables } from "../types";

const TEMPLATES_DIR = join(import.meta.dir);

export function loadTemplate(
  templateName: string,
  variables: TemplateVariables
): string {
  const filePath = join(TEMPLATES_DIR, `${templateName}.txt`);

  const actualPath = existsSync(filePath)
    ? filePath
    : join(TEMPLATES_DIR, "general.txt");

  let content = readFileSync(actualPath, "utf-8");

  for (const [key, value] of Object.entries(variables)) {
    content = content.replaceAll(`{${key}}`, value);
  }

  return content;
}

export function buildVariables(
  type: string,
  title: string,
  cities: string[],
  instructions: string
): TemplateVariables {
  const now = new Date();

  return {
    type,
    title,
    cities: cities.join(", "),
    instructions,
    time: now.toLocaleTimeString("he-IL", { timeZone: "Asia/Jerusalem" }),
    date: now.toLocaleDateString("he-IL", { timeZone: "Asia/Jerusalem" }),
    count: cities.length.toString(),
  };
}
