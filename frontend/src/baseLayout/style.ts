import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: blue;
`;
const Logo = styled.div`
  color: white;
  font-weight: 800;
  font-size: 48px;
`;

const Img = styled.div`
  img {
    width: 200px;
    height: 100px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
  font-weight: 800;
  color: white;
`;

const ContentLogin = styled.div`
  display: flex;
  gap: 10px;
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: white;
  font-weight: 500;
  font-size: 20px;
  svg {
    width: 30px;
    height: 30px;
  }
`;

const Main = styled.div`
  min-height: 72.5vh;
`;

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: blue;
`;

export default {
  HeaderStyled,
  Logo,
  Login,
  Main,
  FooterStyled,
  Content,
  ContentLogin,
  Img,
};
