import styled from "styled-components";

const StyledSearch = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  border: solid 1px var(--sub);
  height: 2rem;
  border-radius: 1rem;
  color: var(--main);

  ::placeholder {
    color: var(--sub);
  }
`;

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const Search = ({ value, setValue }: Props) => {
  return (
    <StyledSearch>
      <Input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </StyledSearch>
  );
};

export default Search;
