const START_INFO_MESSAGE = "Operation failed! Please, enter command in format:";
const HASH_INFO_MESSAGE = "hash path_to_file";
const HASH_ARGUMENTS_COUNT = 1;
const COMPRESS_INFO_MESSAGE = "compress path_to_file path_to_destination";
const COMPRESS_ARGUMENTS_COUNT = 2;
const DECOMPRESS_INFO_MESSAGE = "decompress path_to_file path_to_destination";
const DECOMPRESS_ARGUMENTS_COUNT = 2;

export const checkArgsNumber = (command, num) => {
  if (command === "hash" && num < HASH_ARGUMENTS_COUNT) {
    return `${START_INFO_MESSAGE} ${HASH_INFO_MESSAGE}`;
  }
  if (command === "compress" && num < COMPRESS_ARGUMENTS_COUNT) {
    console.log("ps");
    return `${START_INFO_MESSAGE} ${COMPRESS_INFO_MESSAGE}`;
  }
  if (command === "decompress" && num < DECOMPRESS_ARGUMENTS_COUNT) {
    console.log("ps");
    return `${START_INFO_MESSAGE} ${DECOMPRESS_INFO_MESSAGE}`;
  }
  return false;
};
