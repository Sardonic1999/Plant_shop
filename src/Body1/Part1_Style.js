import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1550px;
  height: fit-content;
  background: #ffffff;
  border: 1px solid red;
`;

export const Left = styled.div``;

export const Img = styled.img`
  position: relative;
`;
export const Logo = styled.img`
  position: absolute;
  top: 40px;
  left: 50px;
`;

export const Right = styled.div`
  h1 {
    color: #156963;
    font-size: 80px;
    margin: 0px;
    padding: 120px 72px 10px 200px;
  }
  p {
    color: #2c1500;
    font-size: 18px;
    padding: 0px 72px 60px 200px;
    margin: 0px;
  }
`;

export const Navbar = styled.div`
  width: 940px;
  height: fit-content;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 56px;
  box-sizing: border-box;
  /* padding-left: 00px; */
  img {
    padding: 40px 30px;
  }
`;

export const Sign = styled.button`
  width: 111px;
  height: 36px;
  color: #156963;
  border: none;
  background: transparent;
`;
export const Sign2 = styled.button`
  width: 111px;
  height: 36px;
  color: white;
  background: #156963;
`;

export const Container = styled.div`
  display: flex;
  width: 940px;
`;

export const Pre = styled.div`
  flex: 1;
  display: column;
  height: 160px;
  box-sizing: border-box;
  h2 {
    color: #156963;
    font-size: 32px;
    margin: 0px;
    padding: 20px;

    text-align: center;
  }
  img {
    margin: 20px 120px 0px 130px;
  }
`;

export const Next = styled.div`
  flex: 1;
  display: column;
  height: 160px;
  background: #156963;
  box-sizing: border-box;
  h2 {
    color: white;
    font-size: 32px;
    margin: 0px;
    padding: 20px;
    text-align: center;
  }
  img {
    margin: 20px 120px 0px 130px;
  }
`;
