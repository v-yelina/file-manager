export const showAvailableCommands = () => {
  return [
    { command: "up", description: "Go upper from current directory" },
    {
      command: "cd path_to_directory",
      description: "Go to dedicated folder from current directory ",
    },
    {
      command: "ls",
      description: "Print in console list of all files and folders in current directory",
    },
    { command: "cat path_to_file", description: "Read file and print it's content in console" },
    {
      command: "add new_file_name",
      description: "Create empty file in current working directory",
    },
    { command: "rn path_to_file new_filename", description: "Rename file" },
    {
      command: "cp path_to_file path_to_new_directory",
      description: "Copy file ",
    },
    {
      command: "mv path_to_file path_to_new_directory",
      description: "Move file",
    },
    { command: "rm path_to_file", description: "Delete file" },
    { command: "os", description: "Get operating system info" },
    {
      command: "hash path_to_file",
      description: "Calculate hash for file and print it into console",
    },
    { command: "Compress file", description: "compress path_to_file path_to_destination" },
    { command: "Decompress file", description: "decompress path_to_file path_to_destination" },
  ];
};
