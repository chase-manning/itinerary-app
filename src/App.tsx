import styled from "styled-components";
import Search from "./components/Search";
import Dates from "./components/Dates";
import { useState } from "react";
import { PersonType } from "./app/itinerary";
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
  padding: 2rem 0;
`;

const ItineraryItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
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
  const dates = ["Today", "Tomorrow", "Next Week"];
  const [active, setActive] = useState(dates[0]);
  const itinerary = useItinerary(PersonType.Chase);

  return (
    <StyledApp>
      <Search value={search} setValue={setSearch} />
      <ItineraryItemsContainer>
        <ItineraryItems>
          {itinerary.map((itinerary, index) => (
            <ItineraryItem key={index} itinerary={itinerary} />
          ))}
        </ItineraryItems>
      </ItineraryItemsContainer>
      <Dates active={active} dates={dates} setActive={setActive} />
    </StyledApp>
  );
};

export default App;
