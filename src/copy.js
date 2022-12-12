import { copyFile, constants } from "node:fs";
import { errorHandler } from "./utils/errorHandler.js";

export const copy = (source, destination) => {
  copyFile(source, destination, constants.COPYFILE_EXCL, (err) => {
    if (err) {
      errorHandler(err);
    } else {
      console.log(`${source} was copied to ${destination}`);
    }
  });
};
