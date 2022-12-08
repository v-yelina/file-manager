import readline from "readline";

const start = () => {
  const args = process.argv.slice(2);
  const username = args[0].startsWith("--username") ? args[0].split("=")[1] : undefined;

  console.log(`Welcome to the File Manager, ${username}!`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.prompt();

  rl.on("line", (line) => {
    switch (line.trim()) {
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
