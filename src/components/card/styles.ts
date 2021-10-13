import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px;
  margin: 20px;
  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 760px) {
    max-width: 500px;
    max-height: 450px;
    align-self: center;
    padding: 40px 20px;
    margin: 10px;
  }
`;
