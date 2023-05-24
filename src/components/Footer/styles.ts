import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  background: #e9e9e9;
  padding: 24px 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 36px;

    a {
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      color: #322e2e;
    }
  }

  ${media.lessThan("medium")`
    padding: 20px;

    ul {
      flex-wrap: wrap;
      gap: 16px;
    }
  `}
`;
