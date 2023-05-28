import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  padding: 40px 20px;

  ${media.lessThan("medium")`
    padding: 20px;
  `}
`;

export const Container = styled.div`
  max-width: 1334px;
  margin: 0 auto;

  .title {
    margin-bottom: 14px;
    font-size: 24px;
    color: #202020;
    font-weight: 600;
  }
`;

export const FamiliesArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(176px, 1fr));
  grid-gap: 17px;
`;

export const Center = styled.div`
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
`