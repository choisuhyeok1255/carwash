import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border: none;
`;

const Button = ({ $width, $height, children, ...restProps }) => {
  return (
    <StyledButton $width={$width} $height={$height} {...restProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
