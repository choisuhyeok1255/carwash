import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-flow: ${(props) => props.$flexFlow};
  justify-content: ${(props) => props.$justifyContent};
  width: ${(props) => props.$width};
  margin: ${(props) => props.$margin};
`;

const Container = ({
  $flexFlow,
  $justifyContent,
  $width,
  $margin,
  children,
  ...restProps
}) => {
  return (
    <StyledContainer
      $flexFlow={$flexFlow}
      $justifyContent={$justifyContent}
      $width={$width}
      $margin={$margin}
      {...restProps}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
