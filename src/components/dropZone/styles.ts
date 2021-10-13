import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  margin-top: 0;
`;

export const InputContainer = styled.div`
  background-color: rgba(36, 13, 133, 0.1);
  min-height: 150px !important;
  justify-content: center;
  border: 1px dashed rgba(57, 57, 81, 0.5) !important;
  label {
    position: relative !important;
    color: rgba(57, 57, 81, 0.5) !important;
    font-size: 15px;
    font-weight: 500;
    margin-top: 10px;
  }
`;

export const SpinnerCover = styled.div`
  margin: 24px 0;
`;
