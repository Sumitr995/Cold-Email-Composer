import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const linksPath = path.join(__dirname, "../config/links.json");
const links = JSON.parse(fs.readFileSync(linksPath, "utf-8"));

export function processPlaceholders(text, data) {

  let result = text;

  result = result.replace(/\[Name\]/g, data.name);
  result = result.replace(/\[Company\]/g, data.company);

  Object.keys(links).forEach((key) => {

    const regex = new RegExp(`\\[${key}\\]`, "g");

    const linkHTML = `<a href="${links[key]}" target="_blank">${key}</a>`;

    result = result.replace(regex, linkHTML);

  });

  result = result.replace(/\n/g, "<br>");

  return result;
}