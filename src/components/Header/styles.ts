import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  padding: 58px 20px;
  border-top: 1px solid #a11cf3;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  ${media.lessThan("medium")`
    padding: 32px 20px;
  `}
`;

export const Container = styled.div`
  max-width: 1329px;
  margin: 0 auto;

  .title {
    color: #202020;
    font-weight: 700;

    &:after {
      content: " ";
      display: block;
      width: 34px;
      height: 4px;
      background: linear-gradient(0.25turn, #a11cf3, #d835c5);
      border-radius: 4px;
    }
  }
`;
