import readline from "readline";
import os from "os";
import path from "path";
import { list } from "./commands/list.js";
import { getOsData } from "./commands/getOsData.js";
import { calculateHash } from "./commands/getHash.js";
import { trimUrl } from "./utils/trimUrl.js";
import { compress } from "./commands/compress.js";
import { decompress } from "./commands/decompress.js";
import { checkArgsNumber } from "./utils/checkArgsNumber.js";
import { showAvailableCommands } from "./commands/showAvailableCommands.js";
import { read } from "./commands/read.js";
import { create } from "./commands/create.js";
import { rename } from "./commands/rename.js";
import { copy } from "./commands/copy.js";
import { move } from "./commands/move.js";
import { deleteFile } from "./commands/delete.js";
import { up } from "./commands/up.js";
import { welcome } from "./welcome.js";
import { cd } from "./commands/cd.js";

const start = async () => {
  const args = process.argv.slice(2);
  const username = args[0].startsWith("--username") ? args[0].split("=")[1] : undefined;
  let currentDir = os.homedir();

  welcome(username, currentDir);

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
      case "up":
        currentDir = up(currentDir);
        console.log(`\nYou are currently in ${currentDir}`);
        rl.prompt();
        break;
      case "cd":
        if (!isNotEnoughArgs) {
          currentDir = cd(currentDir, trimUrl(args[0]));
        } else {
          console.log(isNotEnoughArgs);
        }
        console.log(`\nYou are currently in ${currentDir}`);
        rl.prompt();
        break;
      case "ls":
        list(currentDir);
        console.log(`\nYou are currently in ${currentDir}`);
        rl.prompt();
        break;
      case "cat":
        if (!isNotEnoughArgs) {
          read(path.resolve(currentDir, trimUrl(args[0])));
        } else {
          console.log(isNotEnoughArgs);
        }
        console.log(`\nYou are currently in ${currentDir}`);
        rl.prompt();
        break;
      case "add":
        if (!isNotEnoughArgs) {
          create(path.resolve(currentDir, trimUrl(args[0])));
        } else {
          console.log(isNotEnoughArgs);
        }
        console.log(`\nYou are currently in ${currentDir}`);
        rl.prompt();
        break;
      case "rn":
        if (!isNotEnoughArgs) {
          rename(
            path.resolve(currentDir, trimUrl(args[0])),
            path.resolve(currentDir, trimUrl(args[1]))
          );
        } else {
          console.log(isNotEnoughArgs);
        }
        console.log(`\nYou are currently in ${currentDir}`);
        rl.prompt();
        break;
      case "cp":
        if (!isNotEnoughArgs) {
          copy(
            path.resolve(currentDir, trimUrl(args[0])),
            path.resolve(currentDir, trimUrl(args[1]))
          );
        } else {
          console.log(isNotEnoughArgs);
        }
        console.log(`\nYou are currently in ${currentDir}`);
        rl.prompt();
        break;
      case "mv":
        if (!isNotEnoughArgs) {
          move(
            path.resolve(currentDir, trimUrl(args[0])),
            path.resolve(currentDir, trimUrl(args[1]))
          );
        } else {
          console.log(isNotEnoughArgs);
        }
        console.log(`\nYou are currently in ${currentDir}`);
        rl.prompt();
        break;
      case "rm":
        if (!isNotEnoughArgs) {
          deleteFile(path.resolve(currentDir, trimUrl(args[0])));
        } else {
          console.log(isNotEnoughArgs);
        }
        console.log(`\nYou are currently in ${currentDir}`);
        rl.prompt();
        break;
      case "os":
        getOsData(args[0].slice(2));
        console.log(`\nYou are currently in ${currentDir}`);
        rl.prompt();
        break;
      case "hash":
        if (!isNotEnoughArgs) {
          calculateHash(path.resolve(currentDir, trimUrl(args[0])));
        } else {
          console.log(isNotEnoughArgs);
        }
        console.log(`\nYou are currently in ${currentDir}`);
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
        console.log(`\nYou are currently in ${currentDir}`);
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
        console.log(`\nYou are currently in ${currentDir}`);
        rl.prompt();
        break;
      case "--help":
        console.table(showAvailableCommands());
        console.log(`\nYou are currently in ${currentDir}`);
        rl.prompt();
        break;
      case ".exit":
        console.log(`\nYou are currently in ${currentDir}`);
        rl.close();
        break;
      default:
        console.log("Invalid input\nTo see list of available commands enter --help");
        rl.prompt();
        break;
    }
  }).on("close", () => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
  });
};

start();
