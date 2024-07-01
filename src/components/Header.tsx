import styled from "styled-components";
import getPersonPfp from "../app/getPersonPfp";
import { PersonType } from "../app/itinerary";

const StyledHeader = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
`;

const Hello = styled.div`
  font-size: 2.7rem;
  font-weight: 600;
`;

const ProfilePicButton = styled.button`
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
  height: 4rem;
  width: 4rem;
`;

const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
`;

interface Props {
  person: PersonType;
}

const Header = ({ person }: Props) => {
  return (
    <StyledHeader>
      <Hello>{`Hello, ${person}!`}</Hello>
      <ProfilePicButton>
        <ProfilePic src={getPersonPfp(person)} />
      </ProfilePicButton>
    </StyledHeader>
  );
};

export default Header;
