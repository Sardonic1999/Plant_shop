import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1550px;
  height: fit-content;
  background: #ffffff;
  padding: 50px 100px;
  box-sizing: border-box;
`;

export const Left = styled.div`
  flex: 1;
  h1 {
    font-weight: bold;
    font-size: 40px;
    line-height: 56px;
    color: #2c1500;
  }
  p {
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #2c1500;

    opacity: 0.8;
  }
  img {
    width: 600px;
    height: 300px;
    padding: 30px 0px;
  }
`;

export const Right = styled.div`
  flex: 1;
  img {
    width: 613px;
    height: 650px;
  }
`;
