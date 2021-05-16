import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  margin: ${(props) => props.$margin};
  background-color: ${(props) => props.$backgroundColor};
  border-radius: ${(props) => props.$borderRadius};
  position: ${(props) => props.$position};
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  border: none;
  padding: 0;
`;

const Button = ({
  $width,
  $height,
  $margin,
  $backgroundColor,
  $borderRadius,
  $position,
  $top,
  $right,
  children,
  onClick,
  ...restProps
}) => {
  return (
    <StyledButton
      $width={$width}
      $height={$height}
      $margin={$margin}
      $backgroundColor={$backgroundColor}
      $borderRadius={$borderRadius}
      $position={$position}
      $top={$top}
      $right={$right}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
