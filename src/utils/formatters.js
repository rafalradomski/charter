export const dollar = (value) => `$${value}`;
export const niceDate = (timeStamp) => {
  const date = new Date(timeStamp);
  return `${date.getHours()}:${date.getMinutes()}, ${date.toDateString()}`;
};
