import React from "react";
import styled from "styled-components";

const StyledDivisionline = styled.div`
  width: ${(props) => props.$width};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  border-top: 1px solid #cbcbcc;
`;

const DivisionLine = ({ $width, $margin, $padding, ...restProps }) => {
  return (
    <StyledDivisionline
      $width={$width}
      $margin={$margin}
      $padding={$padding}
      {...restProps}
    />
  );
};

export default DivisionLine;
