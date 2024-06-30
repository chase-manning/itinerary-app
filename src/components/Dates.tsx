import styled from "styled-components";

const StyledDates = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;

const DatesContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Date = styled.button`
  background: none;
  border: none;
  outline: none;
  color: var(--main);
  font-size: 1.6rem;
`;

interface Props {
  active: string;
  dates: string[];
  setActive: (date: string) => void;
}

const Dates = ({ active, dates, setActive }: Props) => {
  return (
    <StyledDates>
      <DatesContainer>
        {dates.map((date) => (
          <Date
            key={date}
            style={{
              color: date === active ? "var(--primary)" : "var(--main)",
            }}
            onClick={() => setActive(date)}
          >
            {date}
          </Date>
        ))}
      </DatesContainer>
    </StyledDates>
  );
};

export default Dates;
