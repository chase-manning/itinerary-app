const formatTime = (time: number): string => {
  let hours = Math.floor(time / 100);
  let minutes = time % 100;
  // Round minutes to the nearest 5
  minutes = Math.round(minutes / 5) * 5;
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
};

export default formatTime;
