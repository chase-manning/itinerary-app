const addMinutes = (time: number, minutes: number): number => {
  const timeHours = Math.floor(time / 100);
  const timeMinutes = time % 100;
  const totalTime = timeHours * 60 + timeMinutes;
  const newTime = totalTime + minutes;
  const newTimeHours = Math.floor(newTime / 60);
  const newTimeMinutes = newTime % 60;
  return newTimeHours * 100 + newTimeMinutes;
};

export default addMinutes;
