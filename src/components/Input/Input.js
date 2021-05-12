import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: ${(props) => props.$borderRadius};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
`;

const Input = ({
  placeholder,
  $borderRadius,
  $margin,
  $padding,
  onChange,
  value,
  ...restProps
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      $borderRadius={$borderRadius}
      $margin={$margin}
      $padding={$padding}
      onChange={onChange}
      value={value}
      {...restProps}
    ></StyledInput>
  );
};

export default Input;
