import { createReadStream } from "node:fs";
import { stdout } from "node:process";
const { createHash } = await import("node:crypto");
import { errorHandler } from "../utils/errorHandler.js";

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
