import { Input } from "./Filter.styled";

export const Filter = ({ findName }) => {
  return (
    <>
      <Input
        type="text"
        placeholder="Find contacts by name"
        onChange={findName}
      />
    </>
  );
};
