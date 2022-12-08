import readline from "readline";
import os from "os";
import { list } from "./list.js";

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
