import readline from "readline";
import { getUrl } from "./getUrl.js";

const start = () => {
  const args = process.argv.slice(2);
  const username = args[0].startsWith("--username") ? args[0].split("=")[1] : undefined;
  const currentDir = getUrl(import.meta.url, "", "");

  console.log(`Welcome to the File Manager, ${username}!`);
  console.log(`You are currently in ${currentDir}`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.prompt();

  rl.on("line", (line) => {
    const commandArr = line.trim().split(" ");
    switch (commandArr[0]) {
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
