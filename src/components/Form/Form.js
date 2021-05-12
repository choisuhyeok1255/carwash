import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: ${(props) => props.$display};
  width: ${(props) => props.$width};
  margin: ${(props) => props.$margin};
  justify-content: ${(props) => props.$justifyContent};
`;

const Form = ({
  $width,
  $height,
  $display,
  $justifyContent,
  onSubmit,
  ...restProps
}) => {
  return (
    <StyledForm
      $width={$width}
      $height={$height}
      $display={$display}
      $justifyContent={$justifyContent}
      onSubmit={onSubmit}
      {...restProps}
    ></StyledForm>
  );
};

export default Form;
