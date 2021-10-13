import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(36, 13, 133, 0.3);
  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0 10px;
  @media (min-width: 760px) {
    margin-top: 5px;
  }
`;

export const HeaderLeft = styled.div`
  h1 {
    color: rgba(57, 57, 81, 1);
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 20px;
  }
`;

export const Text = styled.p`
  color: rgba(57, 57, 81, 1);
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  margin-bottom: 40px;
  text-align: center;
  @media (min-width: 760px) {
    text-align: left;
  }
`;
