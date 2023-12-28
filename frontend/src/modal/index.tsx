import animation from "../assets/image/showModal.gif";
import { IoMdCloseCircle } from "react-icons/io";
import S from "./styled";
import { useEffect, useState } from "react";

type Props = {
  closeModal: () => void;
};

const Modal = ({ closeModal }: Props) => {
  const TypeWriterEffect = () => {
    const [text, setText] = useState("");

    useEffect(() => {}, []);
  };

  return (
    <>
      <S.Box onClick={closeModal}>
        <S.CloseModal>
          <IoMdCloseCircle onClick={closeModal} />
        </S.CloseModal>
        <S.Content>
          <h1>Beit HaSefer</h1>
          <h3>
            Seja bem vindo! Aprenda como se conectar ao Criador e ter uma vida
            plena!
          </h3>
        </S.Content>
        <S.Icon>
          <img src={animation} alt="Animação com o logo da beit" />
        </S.Icon>
      </S.Box>
    </>
  );
};

export default Modal;
