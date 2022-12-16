import { trimUrl } from "./trimUrl.js";

export const removeQuotes = (argsArr) => {
  const argsStr = argsArr.join(" ");
  let newArgsArr = [...argsArr];
  if (argsStr[0] === "'") {
    newArgsArr = argsStr.split("'").slice(1);
  } else if (argsStr[0] === '"') {
    newArgsArr = argsStr.split('"').slice(1);
  }
  newArgsArr.forEach((arg) => (arg = trimUrl(arg)));
  return newArgsArr.filter((el) => el !== "" && el !== " ");
};
