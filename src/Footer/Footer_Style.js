import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1550px;
  height: fit-content;
  background: #ffffff;
  padding: 50px 200px;
  box-sizing: border-box;
  border-top: 1px solid rgba(21, 105, 99, 0.3);
`;

export const Left = styled.div`
  flex: 1;
  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #156963;
  }
  h4 {
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    color: #4f4f4f;
  }
`;
export const Right = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-around;
`;

export const Section = styled.div`
  h4 {
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    color: #4f4f4f;
  }
  input {
    width: 234px;
    height: 32px;
    padding-left: 15px;
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    border-radius: 2px;
  }
  button {
    width: 70px;
    height: 32px;
    background: #156963;
    border-radius: 2px;
    cursor: pointer;
    margin-top: 20px;
    backdrop-filter: blur(10px);
    color: white;
  }
`;
