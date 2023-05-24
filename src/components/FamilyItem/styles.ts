import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  border: 1px solid #cccccc;
`;

export const ImageArea = styled.div`
  height: 198px;
`;

export const InfoArea = styled.div`
  padding: 8px;
  border-top: 1px solid #ccc;

  display: flex;
  align-items: center;
  gap: 8px;

  .family-name {
    font-size: 10px;
    color: #202020;
    flex: 1;
  }

  .separator {
    background-color: #ccc;
    width: 2px;
    height: 10px;
    border-radius: 10px;
  }
`;
