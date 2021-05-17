import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-weight: ${(props) => props.$fontWeight};
  color: ${(props) => props.$color};
  font-size: ${(props) => props.$fontSize};
  margin: ${(props) => props.$margin};
`;

const Heading = ({
  $fontWeight,
  $color,
  $fontSize,
  $margin,
  children,
  ...restProps
}) => {
  return (
    <StyledHeading
      $fontWeight={$fontWeight}
      $color={$color}
      $fontSize={$fontSize}
      $margin={$margin}
      {...restProps}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
