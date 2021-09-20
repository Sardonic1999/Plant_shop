import styled from "styled-components";

export const Container = styled.div`
  /* display: flex; */
  width: 1550px;
  height: fit-content;
  background: #ffffff;
  box-sizing: border-box;
  padding: 50px 60px;
  align-items: center;
`;

export const Title = styled.div`
  /* border-bottom: 1px solid #e0e0e0; */
  display: flex;
  width: 1450px;
  padding: 10px 40px;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e0e0;

  h1 {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    margin: 0px;
  }
  select {
    width: 140px;
    height: 40px;
    background: transparent;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    margin-left: auto;
  }
`;

export const Flow = styled.div`
  display: flex;
  padding: 24px;
  justify-content: space-around;
`;

export const Con = styled.div`
  width: 222px;
  height: fit-content;
  text-align: center;
  box-sizing: border-box;
  img {
    width: 220px;
    height: 250px;
    background: #c4c4c4;
  }
  h4 {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #000000;
    margin: 0px;
    padding: 10px 0px;
  }
  p {
    margin: 0px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #000000;
  }
`;
