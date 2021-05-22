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
`;

const LinkButton = ({
  $width,
  $height,
  $margin,
  $backgroundColor,
  $borderRadius,
  $color,
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
      {...restProps}
    >
      {children}
    </StyledLink>
  );
};

export default LinkButton;
