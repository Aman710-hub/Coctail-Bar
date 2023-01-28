import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
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

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  height: 150px;
  background-color: #283149;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    cursor: pointer;
  }

  ul {
    margin-top: 30px;
    width: 200px;
    display: flex;
    justify-content: space-evenly;
  }

  ul .link-item {
    color: white;
    transition: 0.4s ease-out;
    cursor: pointer;
  }

  ul .link-item:hover {
    text-decoration: underline #38e54d 2px;
    text-underline-offset: 7px;
  }

  ul .link-item:first-child {
    margin-bottom: 13px;
  }
`;
