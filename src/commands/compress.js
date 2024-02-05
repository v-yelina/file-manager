import fs from "fs";
import zlib from "zlib";
import { errorHandler } from "../utils/errorHandler.js";

export const compress = (fileToCompressUrl, destinationFileUrl, currentDir) => {
  const readable = fs.createReadStream(fileToCompressUrl);
  const writable = fs.createWriteStream(destinationFileUrl);

  const brotli = zlib.createBrotliCompress();

  readable
    .pipe(brotli)
    .pipe(writable)
    .on("finish", () => {
      console.log("Successfully done compessing");
      writable.end();
      console.log(`\nYou are currently in ${currentDir}`);
    });

  readable.on("error", (err) => {
    errorHandler(err);
  });
  writable.on("error", (err) => {
    errorHandler(err);
  });
  brotli.on("error", (err) => {
    errorHandler(err);
  });
};
