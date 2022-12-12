import fs from "fs";
import { errorHandler } from "./utils/errorHandler.js";

export const read = async (fileToReadPath) => {
  fs.readFile(fileToReadPath, "utf8", (err, data) => {
    if (err) {
      errorHandler(err);
    } else {
      console.log(data);
    }
  });
};
