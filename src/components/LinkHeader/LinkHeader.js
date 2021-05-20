import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.$color};
`;

const LinkHeader = ({ to, $color, children, ...restProps }) => {
  return (
    <StyledLink to={to} $color={$color} {...restProps}>
      {children}
    </StyledLink>
  );
};

export default LinkHeader;
