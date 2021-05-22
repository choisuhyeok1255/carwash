import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  display: ${(props) => props.$display};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  font-size: ${(props) => props.$fontSize};
  word-break: break-all;
  line-height: ${(props) => props.$lineHeight};
  margin: ${(props) => props.$margin};
`;

const Paragraph = ({
  $display,
  $width,
  $height,
  $fontSize,
  $lineHeight,
  $margin,
  children,
  ...restProps
}) => {
  return (
    <StyledParagraph
      $display={$display}
      $width={$width}
      $height={$height}
      $fontSize={$fontSize}
      $lineHeight={$lineHeight}
      $margin={$margin}
      {...restProps}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
