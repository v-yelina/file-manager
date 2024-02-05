import fs from "fs";
import { errorHandler } from "../utils/errorHandler.js";

export const create = async (newFileUrl, currentDir) => {
  fs.open(newFileUrl, "wx", (err) => {
    if (err) {
      errorHandler(err);
    } else {
      console.log("File is created.");
      console.log(`\nYou are currently in ${currentDir}`);
    }
  });
};
