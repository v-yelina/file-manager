import fs from "fs";
import { errorHandler } from "../utils/errorHandler.js";

export const rename = async (currentFileName, newFileName) => {
  fs.access(currentFileName, fs.constants.F_OK, (err) => {
    if (err) {
      errorHandler(err);
    } else {
      fs.access(newFileName, fs.constants.F_OK, (err) => {
        if (err) {
          fs.rename(currentFileName, newFileName, (err) => {
            if (err) {
              errorHandler(err);
            } else {
              console.log(`${currentFileName} is renamed to ${newFileName}`);
            }
          });
        } else {
          console.log(`Operation failed. ${newFileName} already exists`);
        }
      });
    }
  });
};
