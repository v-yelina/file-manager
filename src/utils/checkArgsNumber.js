const START_INFO_MESSAGE = "Invalid input! Please, enter command in format:";
const HASH_INFO_MESSAGE = "hash path_to_file";
const HASH_ARGUMENTS_COUNT = 1;
const COMPRESS_INFO_MESSAGE = "compress path_to_file path_to_destination";
const COMPRESS_ARGUMENTS_COUNT = 2;
const DECOMPRESS_INFO_MESSAGE = "decompress path_to_file path_to_destination";
const DECOMPRESS_ARGUMENTS_COUNT = 2;
const READ_INFO_MESSAGE = "cat path_to_file";
const READ_ARGUMENTS_COUNT = 1;
const CREATE_INFO_MESSAGE = "add new_file_name";
const CREATE_ARGUMENTS_COUNT = 1;
const RENAME_INFO_MESSAGE = "rn path_to_file new_filename";
const RENAME_ARGUMENTS_COUNT = 2;

export const checkArgsNumber = (command, num) => {
  if (command === "cat" && num < READ_ARGUMENTS_COUNT) {
    return `${START_INFO_MESSAGE} ${READ_INFO_MESSAGE}`;
  }
  if (command === "add" && num < CREATE_ARGUMENTS_COUNT) {
    return `${START_INFO_MESSAGE} ${CREATE_INFO_MESSAGE}`;
  }
  if (command === "rn" && num < RENAME_ARGUMENTS_COUNT) {
    return `${START_INFO_MESSAGE} ${RENAME_INFO_MESSAGE}`;
  }
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
