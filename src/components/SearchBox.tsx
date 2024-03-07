import { ChangeEvent } from "react";


type SearchBoxProps = {
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ searchChange }: SearchBoxProps)  => {
  return (
    <div>
      <input
        type="search" 
        placeholder="search robots" 
        className="pa2 ba b--red br2 bg-lightest-gray"
        onChange={searchChange}
      />
    </div>
  );
} 

export default SearchBox;