import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper className="container">
      <h2 className="text_decoration">About This Bar</h2>
      <p>
        Welcome to our cocktail bar! Immerse yourself in a world of taste and
        creativity as our mixologists craft the perfect drink just for you.
        Whether you prefer classic cocktails or something with a twist, we have
        a drink for every mood and occasion. Our menu features a wide range of
        cocktails, from fruity and refreshing to bold and boozy. Each drink is
        carefully made with the finest ingredients and attention to detail to
        ensure that every sip is an unforgettable experience. We also offer
        non-alcoholic drinks, so there is something for everyone to enjoy. And
        for those looking for a bite to eat, we have a delicious food menu that
        perfectly complements our drinks. So come on in, sit back, and let us
        take care of you. Cheers to a night of good drinks, good food, and good
        company!
      </p>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  display: grid;
  place-content: center;
  text-align: center;
  max-width: 700px;
  line-height: 1.9rem;
  h2 {
    width: max-content;
    margin-inline: auto;
    margin-bottom: 20px;
  }
`;
