import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  background: rgba(36, 36, 36, 1);
  height: 67px;

  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
  }

  ${media.lessThan("medium")`
    padding: 8px;
    height: auto;

    .text {
      font-size: 16px;
      text-align: center;
    }
  `}
`;
