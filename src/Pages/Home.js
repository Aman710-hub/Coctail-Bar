import React, { useEffect } from "react";
import styled from "styled-components";
import CoctailsList from "../Components/CoctailsList";
import SearchForm from "../Components/SearchForm";
import { useGlobalContext } from "../Context/context";

const Home = () => {
  const { onFilterChange, filters, uniqueCategories } = useGlobalContext();

  return (
    <Wrapper className="container">
      {console.log("render HOME")}
      <div className="filters-container">
        <h3>Search coctails</h3>
        <SearchForm />

        <div className="dropdown-select">
          {/* Sort by alcoholic */}
          <div className="filter-container">
            <p className="sort-lable">Sort by alcohol:</p>
            <select
              value={filters.alcohol}
              name="alcohol"
              onChange={onFilterChange}
            >
              <option>All</option>
              <option>Alcoholic</option>
              <option>Non alcoholic</option>
            </select>
          </div>
          <div className="filter-container">
            {/* Sort by category */}
            <p className="sort-lable">Sort by category:</p>
            <select
              value={filters.category}
              name="category"
              onChange={onFilterChange}
            >
              <option>All</option>
              {uniqueCategories?.map((category, index) => {
                return <option key={index}> {category}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
      <CoctailsList />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  .filters-container {
    margin-top: 30px;
    padding-top: 20px;
    width: 100%;
    max-width: 500px;
    margin-inline: auto;
    min-height: 150px;
    background-color: #1a2031;
    /* background-color: #283149; */
    border-radius: 7px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 10px;
    color: white;

    box-shadow: 0 0 16px gray;
    box-shadow: 0 0 16px gray;
  }

  .filters-container h3 {
    margin-bottom: 15px;
  }

  .filter-container {
    display: grid;
    grid-template-columns: auto auto;
  }

  .filter-container {
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

  @media (max-width: 523px) {
    .filter-container {
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
