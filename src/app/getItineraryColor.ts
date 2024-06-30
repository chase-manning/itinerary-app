import { ItineraryType } from "./itinerary";

const getItineraryColor = (type: ItineraryType) => {
  if (type === ItineraryType.Flight) return "var(--flight)";
  if (type === ItineraryType.Drive) return "var(--drive)";
  if (type === ItineraryType.CheckIn) return "var(--hotel)";
  if (type === ItineraryType.CheckOut) return "var(--hotel)";
  if (type === ItineraryType.Activity) return "var(--activity)";
  if (type === ItineraryType.Walk) return "var(--walk)";
  if (type === ItineraryType.Sleep) return "var(--sleep)";
  if (type === ItineraryType.Train) return "var(--train)";
  if (type === ItineraryType.Bus) return "var(--bus)";
  throw new Error("Invalid itinerary type");
};

export default getItineraryColor;
