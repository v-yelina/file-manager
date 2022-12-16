import { createReadStream, createWriteStream } from "node:fs";
import { errorHandler } from "../utils/errorHandler.js";

export const copy = (source, destination) => {
  const readable = createReadStream(source);
  const writable = createWriteStream(destination);
  readable.pipe(writable).on("finish", () => {
    writable.close();
    console.log(`${source} was copied to ${destination}`);
  });
  readable.on("error", (err) => {
    errorHandler(err);
  });
  writable.on("error", (err) => {
    errorHandler(err);
  });
};
