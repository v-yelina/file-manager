import { trimUrl } from "./trimUrl.js";

export const removeQuotes = (argsArr) => {
  const argsStr = argsArr.join(" ");
  let newArgsArr = [...argsArr];
  if (argsStr.includes('"')) {
    newArgsArr = argsStr.split('"');
  } else if (argsStr.includes("'")) {
    newArgsArr = argsStr.split('"');
  }
  newArgsArr.forEach((arg) => (arg = trimUrl(arg)));
  return newArgsArr.filter((el) => el !== "" && el !== " ");
};
