import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  background-color: ${(props) => props.$backgroundColor};
  border-radius: ${(props) => props.$borderRadius};
  position: ${(props) => props.$position};
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  display: ${(props) => props.$display};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  border: none;
  padding: 0;
`;

const Button = ({
  $width,
  $height,
  $margin,
  $padding,
  $backgroundColor,
  $borderRadius,
  $position,
  $top,
  $right,
  $display,
  $justifyContent,
  $alignItems,
  children,
  onClick,
  ...restProps
}) => {
  return (
    <StyledButton
      $width={$width}
      $height={$height}
      $margin={$margin}
      $padding={$padding}
      $backgroundColor={$backgroundColor}
      $borderRadius={$borderRadius}
      $position={$position}
      $top={$top}
      $right={$right}
      $display={$display}
      $justifyContent={$justifyContent}
      $alignItems={$alignItems}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
