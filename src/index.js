import readline from "readline";
import os from "os";
import path from "path";
import { list } from "./list.js";
import { getOsData } from "./getOsData.js";
import { calculateHash } from "./getHash.js";
import { trimUrl } from "./utils/trimUrl.js";
import { compress } from "./compress.js";
import { decompress } from "./decompress.js";
import { checkArgsNumber } from "./utils/checkArgsNumber.js";
import { showAvailableCommands } from "./showAvailableCommands.js";

const start = async () => {
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
    const command = commandArr[0];
    const args = commandArr.slice(1);
    const isNotEnoughArgs = checkArgsNumber(command, args.length);

    switch (command) {
      case "ls":
        list(currentDir);
        rl.prompt();
        break;
      case "os":
        getOsData(args[0].slice(2));
        rl.prompt();
        break;
      case "hash":
        if (!isNotEnoughArgs) {
          calculateHash(path.resolve(currentDir, trimUrl(args[0])));
        } else {
          console.log(isNotEnoughArgs);
        }
        rl.prompt();
        break;
      case "compress":
        if (!isNotEnoughArgs) {
          compress(
            path.resolve(currentDir, trimUrl(args[0])),
            path.resolve(currentDir, trimUrl(args[1]))
          );
        } else {
          console.log(isNotEnoughArgs);
        }
        rl.prompt();
        break;
      case "decompress":
        if (!isNotEnoughArgs) {
          decompress(
            path.resolve(currentDir, trimUrl(args[0])),
            path.resolve(currentDir, trimUrl(args[1]))
          );
        } else {
          console.log(isNotEnoughArgs);
        }
        rl.prompt();
        break;
      case "--help":
        console.table(showAvailableCommands());
        rl.prompt();
        break;
      case ".exit":
        rl.close();
        break;
      default:
        console.log("Invalid input");
        console.log("To see list of available commands enter --help");
        rl.prompt();
        break;
    }
  }).on("close", () => {
    console.log(`\n`);
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  });
};

start();
