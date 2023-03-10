import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/context";
const SearchForm = () => {
  const { term, setTerm } = useGlobalContext();

  return (
    <>
      <Wrapper>
        <form>
          <input
            className="search-input"
            type="search"
            placeholder="Search..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </Wrapper>
    </>
  );
};

export default SearchForm;

const Wrapper = styled.section`
  width: 100%;

  form {
    display: flex;
    justify-content: center;
  }
  .search-input {
    width: 80%;
    height: 35px;
    border-radius: 8px;
    border: gray solid 1px;
    padding-left: 10px;
  }
`;
