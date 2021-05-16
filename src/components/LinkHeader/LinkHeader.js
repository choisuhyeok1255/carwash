import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const LinkHeader = ({ to, children, ...restProps }) => {
  return (
    <StyledLink to={to} {...restProps}>
      {children}
    </StyledLink>
  );
};

export default LinkHeader;
