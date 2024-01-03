import styled, { keyframes } from "styled-components";

const Box = styled.div`
  background: transparent;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  margin-top: 6vh;
  img {
    width: 50vw;
    height: 50vh;
  }
`;

const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const BlinkCaret = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
`;

const TypewriterText = styled.span`
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0;
  letter-spacing: 0.15em;
  animation: ${typing} 3.5s steps(40, end),
    ${BlinkCaret} 0.75s step-end infinite;
`;

const CloseModal = styled.div`
  margin-top: 2vh;
  margin-left: 95vw;
  svg {
    fill: #03affd;
    width: 40px;
    height: 40px;
  }
`;

const Content = styled.div`
  margin-top: 2vh;
  color: #03affd;
  h2 {
    text-align: center;
    font-size: 40px;
  }
`;

export default {
  Box,
  Icon,
  Content,
  typing,
  BlinkCaret,
  TypewriterText,
  CloseModal,
};
