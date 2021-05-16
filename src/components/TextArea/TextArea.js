import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  border: ${(props) => props.$border};
  border-radius: ${(props) => props.$borderRadius};
`;

const TextArea = ({
  $width,
  $height,
  $margin,
  $padding,
  $border,
  $borderRadius,
  children,
  ...restProps
}) => {
  return (
    <StyledTextArea
      $width={$width}
      $height={$height}
      $margin={$margin}
      $padding={$padding}
      $border={$border}
      $borderRadius={$borderRadius}
      {...restProps}
    >
      {children}
    </StyledTextArea>
  );
};

export default TextArea;
