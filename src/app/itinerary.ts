export enum PersonType {
  Chase = "Chase",
  Lien = "Lien",
  Taylor = "Taylor",
  Saskia = "Saskia",
  Kushla = "Kushla",
  Patrick = "Patrick",
}

export enum ItineraryType {
  Flight = "Flight",
  CheckIn = "CheckIn",
  CheckOut = "CheckOut",
  Drive = "Drive",
  Walk = "Walk",
  Bus = "Bus",
  Train = "Train",
  Activity = "Activity",
  Sleep = "Sleep",
  Food = "Food",
}

export interface Itinerary {
  title: string;
  type: ItineraryType;
  fixedStart?: number; // Will either be the start or the duration, starts is as 24hr time, e.g. 1430 for 2:30pm
  fixedDuration?: number; // Duration in minutes
  recommendedDuration?: number; // Duration in minutes
  attendees: PersonType[];
  day?: number;
}

export const START_DAY = new Date(2024, 29, 8);

const ITINERARY: Itinerary[] = [
  {
    title: "Flight to Lisbon",
    type: ItineraryType.Flight,
    fixedStart: 1700,
    fixedDuration: 120,
    attendees: [PersonType.Chase, PersonType.Lien],
  },
  {
    title: "Taxi to Hotel",
    type: ItineraryType.Drive,
    fixedDuration: 30,
    attendees: [PersonType.Chase, PersonType.Lien],
  },
  {
    title: "Check In to Hotel",
    type: ItineraryType.CheckIn,
    fixedDuration: 30,
    attendees: [PersonType.Chase, PersonType.Lien],
  },
  {
    title: "Relax at Hotel",
    type: ItineraryType.Activity,
    recommendedDuration: 60,
    attendees: [PersonType.Chase, PersonType.Lien],
  },
  {
    title: "Walk to Restaurant",
    type: ItineraryType.Walk,
    fixedDuration: 15,
    attendees: [PersonType.Chase, PersonType.Lien],
  },
  {
    title: "Dinner at De Terra",
    type: ItineraryType.Activity,
    fixedStart: 2100,
    recommendedDuration: 120,
    attendees: [PersonType.Chase, PersonType.Lien],
  },
  {
    title: "Walk to Hotel",
    type: ItineraryType.Walk,
    fixedDuration: 15,
    attendees: [PersonType.Chase, PersonType.Lien],
  },
  {
    title: "Sleep",
    type: ItineraryType.Sleep,
    recommendedDuration: 60 * 10,
    attendees: [PersonType.Chase, PersonType.Lien],
  },
  {
    title: "Breakfast at Hotel",
    type: ItineraryType.Food,
    fixedStart: 900,
    recommendedDuration: 120,
    attendees: [PersonType.Chase, PersonType.Lien],
  },
];

export default ITINERARY;
