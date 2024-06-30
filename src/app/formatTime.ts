const formatTime = (time: number): string => {
  let hours = Math.floor(time / 100);
  const minutes = time % 100;
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
};

export default formatTime;
