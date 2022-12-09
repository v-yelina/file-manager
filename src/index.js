import readline from "readline";
import os from "os";
import path from "path";
import { list } from "./list.js";
import { getOsData } from "./getOsData.js";
import { calculateHash } from "./getHash.js";
import { trimUrl } from "./trimUrl.js";

const start = () => {
  const args = process.argv.slice(2);
  const username = args[0].startsWith("--username") ? args[0].split("=")[1] : undefined;
  const userHomeDir = os.homedir();
  let currentDir = userHomeDir;

  console.log(`Welcome to the File Manager, ${username}!`);
  console.log(`You are currently in ${userHomeDir}`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.prompt();

  rl.on("line", (line) => {
    const commandArr = line.trim().split(" ");
    switch (commandArr[0]) {
      case "ls":
        list(currentDir);
        rl.prompt();
        break;
      case "os":
        getOsData(commandArr[1].slice(2));
        rl.prompt();
        break;
      case "hash":
        calculateHash(path.resolve(currentDir, trimUrl(commandArr[1])));
        rl.prompt();
        break;
      case ".exit":
        rl.close();
        break;

      default:
        // sentence = line + "\n";
        // writable.write(sentence);
        // rl.prompt();
        break;
    }
  }).on("close", () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  });
};

start();
