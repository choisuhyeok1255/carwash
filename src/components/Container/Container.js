import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-flow: ${(props) => props.$flexFlow};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  flex-wrap: ${(props) => props.$flexWrap};
  width: ${(props) => props.$width};
  margin: ${(props) => props.$margin};
  border-radius: ${(props) => props.$borderRadius};
  border: ${(props) => props.$border};
  padding: ${(props) => props.$padding};
`;

const Container = ({
  $flexFlow,
  $justifyContent,
  $alignItems,
  $flexWrap,
  $width,
  $margin,
  $border,
  $borderRadius,
  $padding,
  children,
  ...restProps
}) => {
  return (
    <StyledContainer
      $flexFlow={$flexFlow}
      $justifyContent={$justifyContent}
      $alignItems={$alignItems}
      $flexWrap={$flexWrap}
      $width={$width}
      $margin={$margin}
      $border={$border}
      $borderRadius={$borderRadius}
      $padding={$padding}
      {...restProps}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
