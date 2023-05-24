import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  border: 1px solid #cccccc;
`;

export const ImageArea = styled.div`
  padding: 8px;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoArea = styled.div`
  padding: 8px;
  border-top: 1px solid #ccc;
  height: 36px;

  display: flex;
  align-items: center;
  gap: 8px;

  .family-name {
    font-size: 10px;
    color: #202020;
    font-weight: 600;
    flex: 1;
  }

  .separator {
    background-color: #ccc;
    width: 2px;
    height: 10px;
    border-radius: 10px;
  }
`;
