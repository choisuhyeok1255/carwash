import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-size: ${(props) => props.$fontSize};
  margin: ${(props) => props.$margin};
`;

const Span = ({ $fontSize, $margin, children, ...restProps }) => {
  return (
    <StyledSpan $fontSize={$fontSize} $margin={$margin} {...restProps}>
      {children}
    </StyledSpan>
  );
};

export default Span;
