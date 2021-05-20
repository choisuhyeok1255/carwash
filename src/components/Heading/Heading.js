import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-weight: ${(props) => props.$fontWeight};
  color: ${(props) => props.$color};
  font-size: ${(props) => props.$fontSize};
  margin: ${(props) => props.$margin};
  line-height: ${(props) => props.$lineHeight};
`;

const Heading = ({
  $fontWeight,
  $color,
  $fontSize,
  $margin,
  $textAlign,
  $lineHeight,
  children,
  ...restProps
}) => {
  return (
    <StyledHeading
      $fontWeight={$fontWeight}
      $color={$color}
      $fontSize={$fontSize}
      $margin={$margin}
      $lineHeight={$lineHeight}
      {...restProps}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
