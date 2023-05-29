import styled from "styled-components";

type ContainerProps = {
  color: string;
};

export const Container = styled.div<ContainerProps>`
  display: inline;

  .plane {
    width: 2em;
    height: 2em;
    background-color: ${(props) => props.color};
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
