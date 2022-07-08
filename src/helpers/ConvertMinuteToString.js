export const ConvertMinuteToString = (second) => {
  const minututes = Math.floor(second / 60);
  // const seconds = "0" + (second - minututes * 60).toString().slice(-1);
  const seconds = addZero(second - minututes * 60);

  return `${minututes}:${seconds}`;
};
const addZero = (time) => {
  if (time.toString().length === 1) {
    return `0${time}`;
  }
  return time;
};
