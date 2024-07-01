import styled from "styled-components";
import { PersonType } from "../app/itinerary";

const StyledPersonSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: var(--bg);
`;

const Header = styled.div`
  font-size: 2.7rem;
  font-weight: 600;
  width: 100%;
  text-align: center;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
`;

const Option = styled.button<{ $active: boolean }>`
  width: 100%;
  height: 8rem;
  border-radius: 2rem;
  padding: 2rem;
  font-size: 2rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid
    ${({ $active }) => ($active ? "var(--primary)" : "var(--main)")};
  color: ${({ $active }) => ($active ? "var(--primary)" : "var(--main)")};
`;

interface Props {
  person: PersonType | null;
  setPerson: (person: PersonType) => void;
}

const PersonSelection = ({ person, setPerson }: Props) => {
  if (person) return null;

  const personValues = Object.values(PersonType);

  return (
    <StyledPersonSection>
      <Header>Who are you?</Header>
      <Options>
        {personValues.map((personValue, index) => (
          <Option
            key={index}
            $active={person === personValue}
            onClick={() => setPerson(personValue)}
          >
            {personValue}
          </Option>
        ))}
      </Options>
      <div />
    </StyledPersonSection>
  );
};

export default PersonSelection;
