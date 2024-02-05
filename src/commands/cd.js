import path from "path";
import { access, constants } from "fs/promises";
import { errorHandler } from "../utils/errorHandler.js";

export const cd = async (currentDir, destination) => {
  try {
    const regex = /^[a-zA-Z]:$/;
    let destinationDir = regex.test(destination) ? destination + "/" : destination;
    let newDir = path.resolve(currentDir, destinationDir);
    try {
      await access(newDir, constants.R_OK | constants.W_OK);
    } catch (err) {
      throw new Error(`Folder '${destinationDir}' does not exist.`);
    }

    return newDir;
  } catch (err) {
    errorHandler(err);
    return null;
  }
};
