import fs from "fs";
import zlib from "zlib";
import { errorHandler } from "./utils/errorHandler.js";

export const decompress = (fileToDecompressUrl, destinationFileUrl) => {
  const readable = fs.createReadStream(fileToDecompressUrl);
  const writable = fs.createWriteStream(destinationFileUrl);

  const brotli = zlib.createBrotliDecompress();

  readable
    .pipe(brotli)
    .pipe(writable)
    .on("finish", () => {
      console.log("Successfully done decompessing");
      writable.end();
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
