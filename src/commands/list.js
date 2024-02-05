import { readdir } from "node:fs/promises";
import { errorHandler } from "../utils/errorHandler.js";

export const list = async (dirUrl) => {
  readdir(dirUrl, { withFileTypes: true })
    .then((files) => {
      const filesInfo = [];

      files.forEach((file) => {
        filesInfo.push({ Name: file.name, Type: file.isFile() ? "file" : "directory" });
      });
      console.log("\n");
      console.table(filesInfo.sort((a, b) => a.Type.localeCompare(b.Type) || b.Name - a.Name));
      console.log(`\nYou are currently in ${dirUrl}`);
    })
    .catch((err) => {
      errorHandler(err);
    });
};
