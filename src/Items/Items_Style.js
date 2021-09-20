import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1550px;
  height: fit-content;
  background: #ffffff;
  box-sizing: border-box;
  padding: 50px 60px;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;

export const Tree = styled.div`
  width: 300px;
  height: 160px;
  padding: 22px 16px;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  p {
    margin: 0px;
    padding: 10px 10px 0px 0px;
    font-size: 12px;
  }
  img {
    width: 200px;
    height: 48px;
    cursor: pointer;
  }
`;
