import styled from "styled-components";
import { Itinerary, ItineraryType } from "../app/itinerary";
import getItineraryIcon from "../app/getItineraryIcon";
import getItineraryColor from "../app/getItineraryColor";
import formatTime from "../app/formatTime";
import addMinutes from "../app/addMinutes";

const StyledItineraryItem = styled.a<{ itinerary: Itinerary }>`
  width: 100%;
  height: 11.5rem;
  display: flex;
  padding: 2rem;
  border-radius: 2rem;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

  background: ${({ itinerary }) => getItineraryColor(itinerary.type)};
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex: 1;
`;

const TextSubSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const TextSubSubSection = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Header = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;

const Subheader = styled.div`
  font-size: 1.4rem;
`;

const Time = styled.div`
  font-size: 1.7rem;
  font-weight: 600;
  margin-left: 0.3rem;
  line-height: 1;
`;

const IconSection = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  padding: 1.5rem;
`;

const Icon = styled.img`
  height: 100%;
  opacity: 0.7;
`;

interface Props {
  itinerary: Itinerary;
}

const ItineraryItem = ({ itinerary }: Props) => {
  const getStartTimeText = (type: ItineraryType) => {
    if (type === ItineraryType.Flight) return "Departs at";
    if (type === ItineraryType.Drive) return "Leave at";
    if (type === ItineraryType.CheckIn) return "Arrive at";
    if (type === ItineraryType.CheckOut) return "Check out at";
    if (type === ItineraryType.Activity) return "Start at";
    if (type === ItineraryType.Walk) return "Leave at";
    if (type === ItineraryType.Sleep) return "Sleep at";
    if (type === ItineraryType.Train) return "Leave at";
    if (type === ItineraryType.Bus) return "Leave at";
    if (type === ItineraryType.Food) return "Eat at";
    throw new Error("Invalid itinerary type");
  };

  return (
    <StyledItineraryItem
      itinerary={itinerary}
      href={itinerary.link}
      target="_blank"
    >
      <TextSection>
        <Header>{itinerary.title}</Header>
        <TextSubSection>
          <TextSubSubSection>
            <Subheader>{`${getStartTimeText(itinerary.type)}: `}</Subheader>
            <Time> {formatTime(itinerary.fixedStart!)}</Time>
          </TextSubSubSection>
          <Subheader>{`${formatTime(itinerary.fixedStart!)} - ${formatTime(
            addMinutes(itinerary.fixedStart!, itinerary.fixedDuration!)
          )} (${
            Math.floor(itinerary.fixedDuration! / 60) > 0
              ? Math.floor(itinerary.fixedDuration! / 60) > 24
                ? `${Math.floor(itinerary.fixedDuration! / 60) - 24}h `
                : `${Math.floor(itinerary.fixedDuration! / 60)}h `
              : ""
          }${
            Math.round((itinerary.fixedDuration! % 60) / 5) * 5
          }m)`}</Subheader>
          <Subheader>{``}</Subheader>
        </TextSubSection>
      </TextSection>
      <IconSection>
        <Icon src={getItineraryIcon(itinerary.type)} alt="icon" />
      </IconSection>
    </StyledItineraryItem>
  );
};

export default ItineraryItem;
