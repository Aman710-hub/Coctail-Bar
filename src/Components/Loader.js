import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <div class="continuous-7"></div>
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.section`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* animation  */
  .continuous-7 {
    width: 120px;
    height: 20px;
    -webkit-mask: linear-gradient(90deg, #000 70%, #0000 0) left/20% 100%;
    background: linear-gradient(#000 0 0) left -25% top 0 /20% 100% no-repeat
      #ddd;
    animation: ct7 1s infinite steps(6);
  }
  @keyframes ct7 {
    100% {
      background-position: right -25% top 0;
    }
  }
`;
