import { createReadStream, createWriteStream } from "node:fs";
import { unlink } from "fs/promises";
import { errorHandler } from "./utils/errorHandler.js";

export const move = (targetFileUrl, destinationFileUrl) => {
  const readable = createReadStream(targetFileUrl);
  const writable = createWriteStream(destinationFileUrl);
  readable.pipe(writable).on("finish", () => {
    writable.close();
    unlink(targetFileUrl, (err) => {
      if (err) errorHandler(err);
    });
    console.log("Moving is successfully completed");
  });
  readable.on("error", (err) => {
    errorHandler(err);
  });
  writable.on("error", (err) => {
    errorHandler(err);
  });
};
