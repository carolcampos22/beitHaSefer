import beit from "../../assets/image/beit.svg";
import otTorah from "../../assets/image/eticTorah.svg";
import pratTorah from "../../assets/image/pratTorah.svg";
import mistic from "../../assets/image/kabbalah.svg";
import etTorah from "../../assets/image/eticTorah.svg";
import hebraico from "../../assets/image/hebraico.svg";
import festa from "../../assets/image/festa.svg";
import image from "../../assets/image/pag_inicial.png";
import S from "./homeStyle";

const Home = () => {
  return (
    <S.Container>
      <S.Carousel></S.Carousel>
      <S.contentMain>
        <S.Menu>
          <S.Icon>
            <img src={beit} alt="Logo sobre a beit" />
            <p>Sobre a Beit</p>
          </S.Icon>
          <S.Icon>
            <img src={otTorah} alt="Logo ótica da torah" />
            <p>Ótica da Torah</p>
          </S.Icon>
          <S.Icon>
            <img src={pratTorah} alt="Logo prática da torah" />
            <p>Prática da Torah</p>
          </S.Icon>
          <S.Icon>
            <img src={mistic} alt="Logo " />
            <p>Kabbalah</p>
          </S.Icon>
          <S.Icon>
            <img src={etTorah} alt="Logo " />
            <p>Ética da Torah</p>
          </S.Icon>
          <S.Icon>
            <img src={hebraico} alt="Logo " />
            <p>Estudo de Hebraico</p>
          </S.Icon>
          <S.Icon>
            <img src={festa} alt="Logo " />
            <p>Festividades Judaicas</p>
          </S.Icon>
        </S.Menu>
        <S.Main>
          <img src={image} alt="" />
        </S.Main>
      </S.contentMain>
    </S.Container>
  );
};

export default Home;
