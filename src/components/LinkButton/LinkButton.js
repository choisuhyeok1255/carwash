import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  margin: ${(props) => props.$margin};
  background-color: ${(props) => props.$backgroundColor};
  border-radius: ${(props) => props.$borderRadius};
  color: ${(props) => props.$color};
  font-size: ${(props) => props.$fontSize};
  display: ${(props) => props.$display};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  text-align: ${(props) => props.textAlign};
`;

const LinkButton = ({
  $width,
  $height,
  $margin,
  $backgroundColor,
  $borderRadius,
  $color,
  $display,
  children,
  ...restProps
}) => {
  return (
    <StyledLink
      $width={$width}
      $height={$height}
      $margin={$margin}
      $backgroundColor={$backgroundColor}
      $color={$color}
      $borderRadius={$borderRadius}
      $display={$display}
      {...restProps}
    >
      {children}
    </StyledLink>
  );
};

export default LinkButton;
