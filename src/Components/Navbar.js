import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-container">
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
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.section`
  width: 100%;
  background-color: #283149;
  /* max-width: 80vw; */

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80vw;
    margin-inline: auto;
  }
  h2 {
    cursor: pointer;
    padding: 6px;
    padding-inline: 10px;

    background: -webkit-linear-gradient(#ffea20, #0f6292);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
