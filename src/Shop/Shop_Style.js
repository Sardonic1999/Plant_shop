import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1550px;
  height: fit-content;
  background: #ffffff;
  padding: 50px 100px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  width: 1350px;
  background: #f3f4f6;
`;
export const Text = styled.div`
  padding: 100px;
  h1 {
    font-weight: bold;
    font-size: 40px;
    line-height: 56px;

    color: #2c1500;
  }
  button {
    width: 152px;
    height: 40px;
    background: #156963;
    border: 1px solid #156963;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
  }
`;

export const Img = styled.img`
  padding-left: 100px;
`;
