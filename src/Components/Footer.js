import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Link to="/">
        <h2>Coctail Bar🍸</h2>
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
  height: 103px;
  background-color: #283149;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  h2 {
    cursor: pointer;
    margin-top: 20px;
    color: #ffb100;
    border-radius: 4px;
    padding-inline: 10px;

    /*  */
    background: -webkit-linear-gradient(#ffea20, #0f6292);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ul {
    margin-top: 20px;
    width: 150px;
    display: flex;
    justify-content: space-between;
  }

  ul .link-iem {
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
