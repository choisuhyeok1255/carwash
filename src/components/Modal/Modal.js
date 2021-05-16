import React from "react";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 50%);
`;

const Modal = ({ children, ...restProps }) => {
  return <StyledModal {...restProps}>{children}</StyledModal>;
};

export default Modal;
