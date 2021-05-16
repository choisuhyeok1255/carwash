import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-weight: ${(props) => props.$fontWeight};
`;

const Heading = ({ $fontWeight, children, ...restProps }) => {
  return (
    <StyledHeading $fontWeight={$fontWeight} {...restProps}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
