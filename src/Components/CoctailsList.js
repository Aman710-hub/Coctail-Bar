import React from "react";
import SingleCoctail from "./SingleCoctail";
import styled from "styled-components";
const CoctailsList = ({ data }) => {
  return (
    <Wrapper>
      {data?.map((coctail) => {
        return <SingleCoctail coctail={{ ...coctail }} />;
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
