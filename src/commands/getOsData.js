import os from "os";

export const getOsData = (arg) => {
  switch (arg) {
    case "EOL":
      console.log("Your default system End-Of-Line:");
      console.log(JSON.stringify(os.EOL));
      break;
    case "cpus":
      console.log("Your host machine CPUs info:");
      console.log(
        os.cpus().map((cpu) => {
          return { model: cpu.model, speed: cpu.speed };
        })
      );
      break;
    case "homedir":
      console.log("Your home directory:");
      console.log(os.homedir());
      break;
    case "username":
      console.log("Your current system user name:");
      console.log(os.userInfo().username);
      break;
    case "architecture":
      console.log("Your CPU architecture for which Node.js binary has compiled:");
      console.log(os.arch());
      break;
    default:
      console.log(
        `Operation failed: unknown argument --${arg}, available arguments: --EOL, --cpus, --homedir, --username, --architecture`
      );
      break;
  }
};
