import addMinutes, { timeToMinutes } from "./addMinutes";
import ITINERARY, { Itinerary, ItineraryType, PersonType } from "./itinerary";

const useItinerary = (person: PersonType | null) => {
  if (person === null) return [];
  const itinearyDetailed: Itinerary[] = [];

  let day: number | undefined = 0;
  for (let i = 0; i < ITINERARY.length; i++) {
    let newItinerary: Itinerary = { ...ITINERARY[i], day };
    if (ITINERARY[i].type === ItineraryType.Sleep) {
      day++;
    }
    if (ITINERARY[i].attendees.includes(person)) {
      itinearyDetailed.push(newItinerary);
    }
  }

  const itineraryTimeed: Itinerary[] = [];
  for (let i = 0; i < itinearyDetailed.length; i++) {
    const newItem = { ...itinearyDetailed[i] };
    if (i === 0) {
      if (!newItem.fixedStart) {
        throw new Error("First itinerary item must have a fixed start time");
      }
    } else {
      if (newItem.fixedStart === undefined) {
        let previous = itineraryTimeed[i - 1];
        if (previous.fixedStart === undefined) {
          throw new Error(
            "Previous itinerary item must have a fixed start time"
          );
        }
        if (previous.fixedDuration === undefined) {
          throw new Error("Previous itinerary item must have a fixed duration");
        }
        newItem.fixedStart = addMinutes(
          previous.fixedStart!,
          previous.fixedDuration
        );
      }
    }
    if (newItem.fixedDuration === undefined) {
      let totalRecommendedDuration = 0;
      let totalFixedDuration = 0;
      let totalDuration = 0;
      for (let j = i; j < itinearyDetailed.length; j++) {
        if (j !== i && itinearyDetailed[j].fixedStart !== undefined) {
          totalDuration =
            timeToMinutes(itinearyDetailed[j].fixedStart!) -
            timeToMinutes(newItem.fixedStart);
          if (itinearyDetailed[j].day !== newItem.day) {
            totalDuration += 60 * 24;
          }
          break;
        }
        totalRecommendedDuration +=
          itinearyDetailed[j].recommendedDuration || 0;
        totalFixedDuration += itinearyDetailed[j].fixedDuration || 0;
      }

      let nonFixedDuration = totalDuration - totalFixedDuration;
      let multiplier = nonFixedDuration / totalRecommendedDuration;
      if (!newItem.recommendedDuration) {
        throw new Error("No recommended duration");
      }
      newItem.fixedDuration = newItem.recommendedDuration * multiplier;
      newItem.recommendedDuration = undefined;
    }
    itineraryTimeed.push(newItem);
  }

  return itineraryTimeed;
};

export default useItinerary;
