import React from "react";
import styled from "styled-components";

const Footer = () => {
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

export default Footer;

const Wrapper = styled.footer`
  width: 100%;
  margin-top: 500px;
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

  ul li {
    color: white;
    transition: 0.4s ease-out;
    cursor: pointer;
  }

  ul li:hover {
    text-decoration: underline #38e54d 2px;
    text-underline-offset: 7px;
  }

  ul li:first-child {
    margin-bottom: 13px;
  }
`;
