import styled from "styled-components";

const Card = styled.div``;

const Carousel = styled.div`
  background-color: #03affd;
  height: 100px;
`;

const contentMain = styled.div`
  display: flex;
`;

const Menu = styled.nav`
  background: #03affd;
  width: 100vh;
  height: 100vh;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 80px;
  margin-top: 2px;
  margin-left: 20px;
  gap: 8px;

  img {
    width: 24px;
    height: 24px;
    fill: #ffffff;
  }

  p {
    font-size: 18px;
    color: #ffffff;
    font-weight: 800;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  img {
    width: 100wh;
    height: 100vh;
  }
`;

export default {
  Card,
  Carousel,
  Container,
  contentMain,
  Main,
  Menu,
  Icon,
};
