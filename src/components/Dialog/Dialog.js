import { Button, SVGIcon } from "components";
import React from "react";
import styled from "styled-components";

const StyledDialog = styled.div`
  width: 376px;
  height: 350px;
  z-index: 9999999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #353535;
  border-radius: 5px;
`;

const Dialog = ({ handlerModalClose, children, ...restProps }) => {
  return (
    <StyledDialog {...restProps}>
      {children}
      <Button
        $backgroundColor="inherit"
        $position="absolute"
        $top="15px"
        $right="15px"
        $width="15px"
        $height="15px"
        onClick={handlerModalClose}
      >
        <SVGIcon type="CloseButton" $width="15px" $height="15px"></SVGIcon>
      </Button>
    </StyledDialog>
  );
};

export default Dialog;
