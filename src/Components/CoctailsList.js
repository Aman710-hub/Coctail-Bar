import React, { useEffect } from "react";
import SingleCoctail from "./SingleCoctail";
import styled from "styled-components";
import { useGlobalContext } from "../Context/context";
import Loader from "./Loader";

const CoctailsList = () => {
  const { loading, term, fetchData, filteredData } = useGlobalContext();

  useEffect(() => {
    fetchData(term);
  }, [term]);

  if (loading) {
    return <Loader />;
  }

  if (filteredData?.length < 1) {
    return <h1>Not found</h1>;
  }
  return (
    <Wrapper>
      {filteredData?.map((coctail) => {
        return <SingleCoctail key={coctail.idDrink} coctail={{ ...coctail }} />;
      })}
    </Wrapper>
  );
};

export default CoctailsList;

const Wrapper = styled.section`
  margin-top: 90px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;
