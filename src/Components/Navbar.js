import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <h2>
        <span style={{ color: "red" }}>C</span>
        <span style={{ color: "#125D98" }}>o</span>
        <span style={{ color: "#FCDA05" }}>c</span>
        <span style={{ color: "#379237" }}>t</span>
        <span style={{ color: "#F5EDCE" }}>a</span>
        <span style={{ color: "#277BC0" }}>i</span>
        <span style={{ color: "#674188" }}>l</span>
        <span className="line" style={{ color: "white" }}>
          -
        </span>
        <span style={{ color: "#1F8A70" }}>B</span>
        <span style={{ color: "#ECECEC" }}>a</span>
        <span style={{ color: "#FF0032" }}>r</span>
        <span>🍸🍹</span>
      </h2>
      <ul>
        <li className="home-title">Home</li>
        <li>About</li>
      </ul>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.section`
  width: 100%;
  /* max-width: 80vw; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #283149;

  h2 {
    cursor: pointer;
    padding: 6px;
  }

  ul {
    padding-left: 0;
    display: flex;
    justify-content: space-around;
    width: 300px;
    color: white;
  }

  ul li {
    transition: 0.4s ease-out;
    cursor: pointer;
  }

  ul li:hover {
    text-decoration: underline #38e54d 2px;
    text-underline-offset: 7px;
  }

  @media (max-width: 350px) {
    ul {
      flex-direction: column;
    }

    ul li {
      align-self: center;
    }

    ul li:first-child {
      margin-bottom: 13px;
    }

    .line {
      display: none;
    }
  }
`;
