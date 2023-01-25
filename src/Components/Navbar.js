import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/">
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
      </Link>
      <ul>
        <Link to="/" className="link-item">
          Home
        </Link>
        <Link to="/about" className="link-item">
          About
        </Link>
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

  a {
    text-decoration: none;
  }

  ul {
    padding-left: 0;
    display: flex;
    justify-content: space-around;
    width: 300px;
  }

  ul .link-item {
    transition: 0.4s ease-out;
    cursor: pointer;
  }

  ul .link-item:hover {
    text-decoration: underline #38e54d 2px;
    text-underline-offset: 7px;
  }

  @media (max-width: 350px) {
    ul {
      flex-direction: column;
    }

    ul .link-item {
      align-self: center;
    }

    ul .link-item:first-child {
      margin-bottom: 13px;
    }

    .line {
      display: none;
    }
  }
`;
