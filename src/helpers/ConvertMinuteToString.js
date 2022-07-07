export const ConvertMinuteToString = (second) => {
  const minututes = Math.floor(second / 60);
  const seconds = second - minututes * 60;

  return `${minututes}:${seconds}`;
};
