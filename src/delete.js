import { rm } from "fs/promises";
import { errorHandler } from "./utils/errorHandler.js";

export const deleteFile = (fileToDeleteUrl) => {
  rm(fileToDeleteUrl)
    .then(() => {
      console.log(`${fileToDeleteUrl} was successfully deleted`);
    })
    .catch((err) => errorHandler(err));
};
