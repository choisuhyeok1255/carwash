import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.$color};
  margin: ${(props) => props.$margin};
  font-size: ${(props) => props.$fontSize};
`;

const LinkHeader = ({
  to,
  $color,
  $margin,
  $fontSize,
  children,
  ...restProps
}) => {
  return (
    <StyledLink
      to={to}
      $color={$color}
      $margin={$margin}
      $fontSize={$fontSize}
      {...restProps}
    >
      {children}
    </StyledLink>
  );
};

export default LinkHeader;
