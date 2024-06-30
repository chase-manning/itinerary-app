import styled from "styled-components";
import Search from "./components/Search";
import Dates from "./components/Dates";
import { useState } from "react";
import ITINERARY from "./app/itinerary";
import ItineraryItem from "./components/ItineraryItem";

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
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
`;

const App = () => {
  const [search, setSearch] = useState("");

  const dates = ["Today", "Tomorrow", "Next Week"];
  const [active, setActive] = useState(dates[0]);

  return (
    <StyledApp>
      <Search value={search} setValue={setSearch} />
      <ItineraryItemsContainer>
        <ItineraryItems>
          {ITINERARY.map((itinerary, index) => (
            <ItineraryItem key={index} itinerary={itinerary} />
          ))}
        </ItineraryItems>
      </ItineraryItemsContainer>
      <Dates active={active} dates={dates} setActive={setActive} />
    </StyledApp>
  );
};

export default App;
