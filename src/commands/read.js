import { createReadStream } from "node:fs";
import { errorHandler } from "../utils/errorHandler.js";
import { stdout } from "node:process";

export const read = async (fileToReadPath, currentDir) => {
  const readable = createReadStream(fileToReadPath);
  readable.on("error", (err) => {
    errorHandler(err);
  });
  readable.pipe(stdout);
  readable.on("end", () => {
    console.log(`\nYou are currently in ${currentDir}`);
  });
};
