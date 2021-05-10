import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1``;

const Heading = ({ children, ...restProps }) => {
  return <StyledHeading {...restProps}>{children}</StyledHeading>;
};

export default Heading;
