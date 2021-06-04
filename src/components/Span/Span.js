import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: ${(props) => props.$fontSize};
  margin: ${(props) => props.$margin};
  font-weight: ${(props) => props.$fontWeight};
  vertical-align: ${(props) => props.$verticalAlign};
  display: ${(props) => props.$display};
  flex-wrap: ${(props) => props.$flexWrap};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  height: ${(props) => props.$height};
  max-width: ${(props) => props.$maxWidth};
  float: ${(props) => props.$float};
  letter-spacing: ${(props) => props.$letterSpacing};
`;

const Span = ({ $fontSize, $margin, children, ...restProps }) => {
  return (
    <StyledSpan $fontSize={$fontSize} $margin={$margin} {...restProps}>
      {children}
    </StyledSpan>
  );
};

export default Span;
