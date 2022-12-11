import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { errorHandler } from "./utils/errorHandler.js";
const { createHash } = await import("node:crypto");

export const calculateHash = async (fileUrl) => {
  const readable = createReadStream(fileUrl);
  const hash = createHash("sha256");
  console.log(`Hash for ${fileUrl}:`);
  readable
    .pipe(hash)
    .setEncoding("hex")
    .pipe(stdout)
    .on("error", (err) => {
      errorHandler(err);
    });
  readable.on("error", (err) => {
    errorHandler(err);
  });
  hash.on("error", (err) => {
    errorHandler(err);
  });
};
