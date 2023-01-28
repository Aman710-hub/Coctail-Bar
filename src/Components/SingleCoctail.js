import React from "react";
import styled from "styled-components";

const SingleCoctail = ({ coctail }) => {
  return (
    <Wrapper>
      <img src={coctail.strDrinkThumb} alt="" />
      <div className="body">
        <h3>{coctail.strDrink}</h3>
        <p>
          {" "}
          <span className="text_decoration"> Catagory:</span>{" "}
          {coctail.strCategory}
        </p>
        <p>
          {" "}
          <span className="text_decoration"> Glass:</span> {coctail.strGlass}
        </p>
        <p>
          {" "}
          <span className="text_decoration"> {coctail.strAlcoholic}</span>
        </p>
        <button className="ditail_btn">Ditails</button>
      </div>
    </Wrapper>
  );
};

export default SingleCoctail;

const Wrapper = styled.section`
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 0 10px gray;
  box-shadow: 0 0 10px gray;
  img {
    width: 100%;
  }

  .text_decoration {
    border-bottom: 2px solid #041c32;
    outline-offset: 8px;
    padding-bottom: 2px;
  }
  .body {
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 7px 5px 0 5px;
  }

  .ditail_btn {
    padding: 2px 10px;
    border: solid 1px gray;
    border-radius: 5px;
    background-color: #041c32;
    color: white;
  }
`;
