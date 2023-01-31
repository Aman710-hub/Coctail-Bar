import React from "react";
import styled from "styled-components";
import CoctailsList from "../Components/CoctailsList";
import SearchForm from "../Components/SearchForm";
import { useGlobalContext } from "../Context/context";

const Home = () => {
  const { onFilterChange } = useGlobalContext();

  return (
    <Wrapper className="container">
      {console.log("render")}
      <div className="filter-container">
        <h3>Search coctails</h3>
        <SearchForm />

        <div className="dropdown-select">
          <p className="sort-lable">Sort by alcohol:</p>
          <select id="" onChange={(e) => onFilterChange(e.target.value)}>
            <option>All</option>
            <option>Alcoholic</option>
            <option>Non alcoholic</option>
          </select>
        </div>
      </div>
      <CoctailsList />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  .filter-container {
    margin-top: 30px;
    width: 100%;
    max-width: 400px;
    margin-inline: auto;
    min-height: 150px;
    background-color: #b3ffae;
    border-radius: 7px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 10px;
  }

  .filter-container h3 {
    margin-bottom: 15px;
  }

  .dropdown-select {
    width: 80%;
    margin-top: 20px;
  }

  .sort-lable {
    display: inline-block;
    padding-right: 6px;
  }

  select {
    border-radius: 3px;
    padding-left: 3px;
  }

  @media (max-width: 452px) {
    .dropdown-select {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    select {
      margin-top: 10px;
      margin-left: -12px;
    }
  }
`;
