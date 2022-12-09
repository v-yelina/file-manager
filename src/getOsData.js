import os from "os";

export const getOsData = (arg) => {
  switch (arg) {
    case "EOL":
      console.log(JSON.stringify(os.EOL));
      break;
    case "cpus":
      console.log(os.cpus());
      break;
    case "homedir":
      console.log(os.homedir());
      break;
    case "username":
      console.log(os.userInfo().username);
      break;
    case "architecture":
      console.log(os.arch());
      break;
    default:
      console.log(
        `Error: unknown argument --${arg}, available arguments: --EOL, --cpus, --homedir, --username, --architecture`
      );
      break;
  }
};
