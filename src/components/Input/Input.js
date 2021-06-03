import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: ${(props) => props.$border};
  border-bottom: ${(props) => props.$borderBottom};
  border-radius: ${(props) => props.$borderRadius};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  opacity: ${(props) => props.$opacity};
  z-index: ${(props) => props.$zIndex};
  position: ${(props) => props.$position};
  cursor: ${(props) => (props.type === "file" ? "pointer" : null)};
  display: ${(props) => props.$display};
`;

const Input = ({
  placeholder,
  $border,
  $borderRadius,
  $margin,
  $padding,
  $width,
  $height,
  $opacity,
  $zIndex,
  $position,
  $display,
  onChange,
  value,
  ...restProps
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      $border={$border}
      $borderRadius={$borderRadius}
      $margin={$margin}
      $padding={$padding}
      $width={$width}
      $height={$height}
      $opacity={$opacity}
      $zIndex={$zIndex}
      $position={$position}
      $display={$display}
      onChange={onChange}
      value={value}
      {...restProps}
    />
  );
};

export default Input;
