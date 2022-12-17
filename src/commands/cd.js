import path from "path";

export const cd = (currentDir, destination) => {
  return path.resolve(currentDir, destination);
};
