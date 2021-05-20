import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-flow: ${(props) => props.$flexFlow};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  flex-wrap: ${(props) => props.$flexWrap};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  margin: ${(props) => props.$margin};
  border-radius: ${(props) => props.$borderRadius};
  border: ${(props) => props.$border};
  padding: ${(props) => props.$padding};
  background: ${(props) => props.$background};
`;

const Container = ({
  $flexFlow,
  $justifyContent,
  $alignItems,
  $flexWrap,
  $width,
  $height,
  $margin,
  $border,
  $borderRadius,
  $padding,
  $background,
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
      $height={$height}
      $margin={$margin}
      $border={$border}
      $borderRadius={$borderRadius}
      $padding={$padding}
      $background={$background}
      {...restProps}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
