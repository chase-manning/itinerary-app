import styled from "styled-components";

import dateFormat from "dateformat";
import { START_DAY } from "../app/itinerary";

const StyledDates = styled.div`
  width: 100%;
  height: 8rem;
  overflow-x: auto;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;

const DatesContainer = styled.div`
  display: flex;
  height: 100%;
`;

const DateText = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  aspect-ratio: 1/1;
`;

const DateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
`;

const Day = styled.div<{ $active: boolean }>`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1;
  color: ${({ $active }) => ($active ? "var(--primary)" : "var(--main)")};
`;

const Month = styled.div<{ $active: boolean }>`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1;
  color: ${({ $active }) => ($active ? "var(--primary)" : "var(--main)")};
`;

interface Props {
  active: number;
  dates: number[];
  setActive: (date: number) => void;
}

const Dates = ({ active, dates, setActive }: Props) => {
  return (
    <StyledDates>
      <DatesContainer>
        {dates.map((offset) => {
          const date = new Date(START_DAY);
          date.setDate(date.getDate() + offset);

          return (
            <DateText key={offset} onClick={() => setActive(offset)}>
              <DateContent>
                <Day $active={offset === active}>{dateFormat(date, "dd")}</Day>
                <Month $active={offset === active}>
                  {dateFormat(date, "mmm")}
                </Month>
              </DateContent>
            </DateText>
          );
        })}
      </DatesContainer>
    </StyledDates>
  );
};

export default Dates;
