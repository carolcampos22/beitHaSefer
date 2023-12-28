import styled, { keyframes } from "styled-components";

const Box = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.div`
  img {
    width: 600px;
    height: 400px;
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
  display: inline-block;
  position: static;
`;

const Content = styled.div`
  color: #03affd;
  h1 {
    text-align: center;
    font: 150px;
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
