import { rm } from "fs/promises";
import { errorHandler } from "../utils/errorHandler.js";

export const deleteFile = (fileToDeleteUrl, currentDir) => {
  rm(fileToDeleteUrl)
    .then(() => {
      console.log(`${fileToDeleteUrl} was successfully deleted`);
      console.log(`\nYou are currently in ${currentDir}`);
    })
    .catch((err) => errorHandler(err));
};
