export const ConvertMinuteToString = (second) => {
  const minututes = Math.floor(second / 60);
  const seconds = "0" + (second - minututes * 60).toString().slice(-2);

  return `${minututes}:${seconds}`;
};
