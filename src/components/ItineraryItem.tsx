import styled from "styled-components";
import { Itinerary } from "../app/itinerary";
import getItineraryIcon from "../app/getItineraryIcon";

const StyledItineraryItem = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px var(--sub);
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  flex: 1;
`;

const Header = styled.div`
  font-size: 1.6rem;
`;

const Time = styled.div`
  font-size: 1.4rem;
`;

const IconSection = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;

interface Props {
  itinerary: Itinerary;
}

const ItineraryItem = ({ itinerary }: Props) => {
  return (
    <StyledItineraryItem>
      <TextSection>
        <Header>{itinerary.title}</Header>
        <Time>{itinerary.fixedDuration}</Time>
      </TextSection>
      <IconSection>
        <Icon src={getItineraryIcon(itinerary.type)} alt="icon" />
      </IconSection>
    </StyledItineraryItem>
  );
};

export default ItineraryItem;
