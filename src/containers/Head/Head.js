import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  margin: ${(props) => props.$margin};
`;

const Head = ({ $fontSize, $fontWeight, $margin, children, ...restProps }) => {
  return (
    <StyledHeading
      $fontSize={$fontSize}
      $fontWeight={$fontWeight}
      $margin={$margin}
      {...restProps}
    >
      {children}
    </StyledHeading>
  );
};

export default Head;
