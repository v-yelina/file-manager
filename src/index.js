const start = () => {
  const args = process.argv.slice(2);
  const username = args[0].startsWith("--username") ? args[0].split("=")[1] : undefined;
  console.log(`Welcome to the File Manager, ${username}!`);
};

start();
