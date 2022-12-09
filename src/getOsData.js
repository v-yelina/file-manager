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
  }
};
