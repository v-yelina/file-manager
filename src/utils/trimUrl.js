export const trimUrl = (url) => {
  return url.replace(/(^\"|\')|(\"|\'$)/g, "");
};
