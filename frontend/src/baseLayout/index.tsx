import { Outlet } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import S from "./style";
import logo from "../assets/image/logoBeitHaShefer.png";

const BaseLayout = () => {
  return (
    <>
      <S.HeaderStyled>
        <S.Img>
          <img src={logo} alt="Logo da beit Hasefer" />
        </S.Img>
        <S.Logo>
          <h1>Beit HaSefer</h1>
        </S.Logo>
        <S.ContentLogin>
          <S.Content>
            <p>ברוך</p>
            <p>השם</p>
          </S.Content>
          <S.Login>
            <IoPersonCircleOutline />
            <p>Entrar</p>
          </S.Login>
        </S.ContentLogin>
      </S.HeaderStyled>
      <S.Main>
        <Outlet />
      </S.Main>
      <S.FooterStyled></S.FooterStyled>
    </>
  );
};

export default BaseLayout;
