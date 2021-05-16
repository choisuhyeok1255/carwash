import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  margin: ${(props) => props.$margin};
  background-color: ${(props) => props.$backgroundColor};
  border-radius: ${(props) => props.$borderRadius};
`;

const LinkButton = ({
  $width,
  $height,
  $margin,
  $backgroundColor,
  $borderRadius,
  children,
  ...restProps
}) => {
  return (
    <StyledLink
      $width={$width}
      $height={$height}
      $margin={$margin}
      $backgroundColor={$backgroundColor}
      $borderRadius={$borderRadius}
      {...restProps}
    >
      {children}
    </StyledLink>
  );
};

export default LinkButton;
