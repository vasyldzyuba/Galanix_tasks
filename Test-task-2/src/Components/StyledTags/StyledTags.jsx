import styled from "styled-components";


export const CountImages = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: darkblue;
  font-size: 20px;
  font-weight: bold;
  font-family: cursive;
  word-break: break-all;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 10000;
  height: 106vh;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const CloseButton = styled.span`
  position: absolute;
  right: 20px;
  top: 15px;
  color: red;
  font-size: 40px;
  cursor: pointer;
`;

export const DateToday = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: darkblue;
  font-size: 20px;
  font-weight: bold;
  font-family: cursive;
  word-break: break-all;
`;


