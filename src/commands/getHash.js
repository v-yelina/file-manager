import { createReadStream } from "node:fs";
import { stdout } from "node:process";
const { createHash } = await import("node:crypto");
import { errorHandler } from "../utils/errorHandler.js";

export const calculateHash = async (fileUrl, currentDir) => {
  const readable = createReadStream(fileUrl);
  const hash = createHash("sha256");
  console.log(`Hash for ${fileUrl}:`);
  readable
    .on("data", (chunk) => hash.update(chunk))
    .on("end", () => {
      const calculatedHash = hash.digest("hex");
      console.log(calculatedHash);
      console.log(`\nYou are currently in ${currentDir}`);
    })
    .on("error", (err) => {
      errorHandler(err);
    });
};
