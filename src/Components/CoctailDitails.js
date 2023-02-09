import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../Context/context";
import Loader from "./Loader";

const CoctailDitails = () => {
  const { id } = useParams();
  const { SingleCoctail, fetchSingleCoctail, loading } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    fetchSingleCoctail(id);
  }, []);

  if (loading) {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  }
  return (
    <Wrapper className="container">
      <button className="back_btn" onClick={() => navigate(-1)}>
        Back To Home
      </button>
      {SingleCoctail?.map((coctail) => {
        const {
          strDrinkThumb,
          idDrink,
          strDrink,
          strCategory,
          strAlcoholic,
          strGlass,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strInstructions,
          strVideo,
        } = coctail;

        const ings = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
        ];
        return (
          <div key={idDrink} className="coctail_contailner">
            <img src={strDrinkThumb} alt="coctail" />
            <div className="body">
              <h4>
                <span className="text_decoration"> Name:</span> {strDrink}
              </h4>

              <h4>
                {" "}
                <span className="text_decoration"> Category:</span>{" "}
                {strCategory}
              </h4>
              <h4>
                {" "}
                <span className="text_decoration"> {strAlcoholic}</span>{" "}
              </h4>
              <h4>
                {" "}
                <span className="text_decoration"> Glass:</span> {strGlass}
              </h4>
              <h4>
                <span className="text_decoration">Ingredients:</span>
                {ings?.map((i, index) => {
                  return i ? <span key={index}> {i},</span> : null;
                })}
              </h4>
              <h4>
                {" "}
                <span className="text_decoration"> Instructions:</span>{" "}
                {strInstructions}
              </h4>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default CoctailDitails;

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  grid-template-rows: 100px 1fr;
  img {
    width: 100%;
    max-width: 500px;
  }

  h4 {
    margin: 10px 0;
  }

  .back_btn {
    width: 150px;
    margin-inline: auto;
    background-color: #0a2647;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 7px;
    cursor: pointer;
  }

  .back_btn:hover {
    color: #0a2647;
    background-color: white;
    border: 2px solid #0a2647;
  }
  .body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .coctail_contailner {
    display: grid;
    grid-auto-flow: column;
    column-gap: 2rem;
    align-self: start;
    margin-top: 40px;
    margin-bottom: 50px;
  }

  .text_decoration {
    border-bottom: 2px solid #041c32;
    outline-offset: 4px;
    padding-bottom: 2px;
    background-color: #b3ffae;
  }

  @media (max-width: 930px) {
    .coctail_contailner {
      grid-auto-flow: row;
      max-width: 500px;
      justify-self: center;
    }

    .body {
      min-height: 300px;
      margin-block: 40px;
      justify-content: none;
    }
    h4 {
      margin-block: 10px;
    }
  }
`;
