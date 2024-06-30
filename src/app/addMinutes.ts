export const timeToMinutes = (time: number): number => {
  const hours = Math.floor(time / 100);
  const minutes = time % 100;
  return hours * 60 + minutes;
};

export const minutesToTime = (minutes: number): number => {
  const hours = Math.floor(minutes / 60);
  const newMinutes = minutes % 60;
  return hours * 100 + newMinutes;
};

const addMinutes = (time: number, minutes: number): number => {
  const totalTime = timeToMinutes(time);
  let newTime = totalTime + minutes;
  if (newTime >= 1440) {
    newTime -= 1440;
  }
  return minutesToTime(newTime);
};

export default addMinutes;
