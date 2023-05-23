import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan("medium")`
    height: 60px;
    
    .logo {
      height: 40px;
    }
  `}
`;
