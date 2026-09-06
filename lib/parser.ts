import fs from "fs/promises";
import path from "path";
import mammoth from "mammoth";
import { PDFParse } from "pdf-parse";

export async function parseDocument(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();

  const buffer = await fs.readFile(filePath);

  if (ext === ".docx") {
    const result = await mammoth.extractRawText({
      buffer,
    });

    return result.value;
  }

  if (ext === ".pdf") {
    const parser = new PDFParse({
      data: buffer,
    });

    const result = await parser.getText();

    return result.text;
  }

  throw new Error(`Unsupported file type: ${ext}`);
}
