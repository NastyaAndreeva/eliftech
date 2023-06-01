import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { getOrderById } from "../../api";
import {
  SearchBarContainer,
  SearchBarStyled,
  SearchButton,
} from "./SearchBar.styled";

const SearchBar = ({ keyword, setOrder }) => {
  const searchRef = useRef();

  return (
    <SearchBarContainer>
      <SearchBarStyled
        key="search-bar"
        value={keyword}
        placeholder={"search order by id"}
        ref={searchRef}
      />
      <SearchButton
        onClick={() => {
          getOrderById(searchRef.current.value, setOrder);
          searchRef.current.value = "";
        }}
      >
        <AiOutlineSearch />
      </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
