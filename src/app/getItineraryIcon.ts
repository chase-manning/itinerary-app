import { ItineraryType } from "./itinerary";

import planeIcon from "../assets/itinerary-types/plane.svg";
import busIcon from "../assets/itinerary-types/bus.svg";
import carIcon from "../assets/itinerary-types/car.svg";
import hotelIcon from "../assets/itinerary-types/hotel.svg";
import partyIcon from "../assets/itinerary-types/party.svg";
import sleepIcon from "../assets/itinerary-types/sleep.svg";
import subwayIcon from "../assets/itinerary-types/subway.svg";
import walkingIcon from "../assets/itinerary-types/walking.svg";

const getItineraryIcon = (type: ItineraryType) => {
  if (type === ItineraryType.Flight) return planeIcon;
  if (type === ItineraryType.Drive) return carIcon;
  if (type === ItineraryType.CheckIn) return hotelIcon;
  if (type === ItineraryType.CheckOut) return hotelIcon;
  if (type === ItineraryType.Activity) return partyIcon;
  if (type === ItineraryType.Walk) return walkingIcon;
  if (type === ItineraryType.Sleep) return sleepIcon;
  if (type === ItineraryType.Train) return subwayIcon;
  if (type === ItineraryType.Bus) return busIcon;
  throw new Error("Invalid itinerary type");
};

export default getItineraryIcon;
