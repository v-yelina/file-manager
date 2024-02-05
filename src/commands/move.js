import { createReadStream, createWriteStream } from "node:fs";
import { rm } from "fs/promises";
import { errorHandler } from "../utils/errorHandler.js";

export const move = (targetFileUrl, destinationFileUrl, currentDir) => {
  const readable = createReadStream(targetFileUrl);
  const writable = createWriteStream(destinationFileUrl);
  readable.pipe(writable).on("finish", () => {
    writable.close();
    rm(targetFileUrl)
      .catch((err) => errorHandler(err))
      .then(() => {
        console.log("Moving is successfully completed");
        console.log(`\nYou are currently in ${currentDir}`);
      });
  });
  readable.on("error", (err) => {
    errorHandler(err);
  });
  writable.on("error", (err) => {
    errorHandler(err);
  });
};
