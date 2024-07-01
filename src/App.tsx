import styled from "styled-components";
import Search from "./components/Search";
import Dates from "./components/Dates";
import { useState } from "react";
import { PersonType, START_DAY } from "./app/itinerary";
import ItineraryItem from "./components/ItineraryItem";
import useItinerary from "./app/use-itinerary";

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  background: var(--bg);
`;

const ItineraryItemsContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  height: calc(100dvh - 16rem);
`;

const ItineraryItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 0 2rem;
`;

const App = () => {
  const [search, setSearch] = useState("");
  const itinerary = useItinerary(PersonType.Chase);
  const allDates = itinerary.map((itinerary) => itinerary.day!);
  const dates = [...new Set(allDates)];
  const now = new Date();
  const daysSinceStart = Math.floor(
    (now.getTime() - START_DAY.getTime()) / (1000 * 60 * 60 * 24)
  );
  const onTrip = dates.includes(daysSinceStart);
  const [active, setActive] = useState(onTrip ? daysSinceStart : 0);

  return (
    <StyledApp>
      <Search value={search} setValue={setSearch} />
      <ItineraryItemsContainer>
        <ItineraryItems>
          {itinerary
            .filter((itinerary) => itinerary.day === active)
            .map((itinerary, index) => (
              <ItineraryItem key={index} itinerary={itinerary} />
            ))}
        </ItineraryItems>
      </ItineraryItemsContainer>
      <Dates active={active} dates={dates} setActive={setActive} />
    </StyledApp>
  );
};

export default App;
