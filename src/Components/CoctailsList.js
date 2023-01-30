import React, { useEffect } from "react";
import SingleCoctail from "./SingleCoctail";
import styled from "styled-components";
import { useGlobalContext } from "../Context/context";

const CoctailsList = () => {
  const { loading, term, fetchData, data } = useGlobalContext();

  useEffect(() => {
    fetchData(term);
  }, [term]);
  const fil = data.filter((item) => {
    return item.strAlcoholic === "Alcoholic";
  });
  console.log("🚀 ~ fil ~ fil", fil);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Wrapper>
      {data?.map((coctail) => {
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
