import fs from "fs";
import { errorHandler } from "./utils/errorHandler.js";

export const create = async (newFileUrl) => {
  fs.open(newFileUrl, "wx", (err) => {
    if (err) {
      errorHandler(err);
    } else {
      console.log("File is created.");
    }
  });
};
