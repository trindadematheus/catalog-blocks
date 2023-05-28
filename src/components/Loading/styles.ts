import styled from "styled-components";

export const Container = styled.div`
  display: inline;

  .plane {
    width: 2em;
    height: 2em;
    background-color: #222;
    transform: rotate(0);
    animation: flip 1s infinite;
  }

  @keyframes flip {
    50% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(180deg) rotateX(180deg);
    }
  }
`;
