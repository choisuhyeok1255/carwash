import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-flow: ${(props) => props.$flexFlow};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  flex-wrap: ${(props) => props.$flexWrap};
  width: ${(props) => props.$width};
  max-width: ${(props) => props.$maxWidth};
  height: ${(props) => props.$height};
  margin: ${(props) => props.$margin};
  border-radius: ${(props) => props.$borderRadius};
  border: ${(props) => props.$border};
  padding: ${(props) => props.$padding};
  background: ${(props) => props.$background};
  position: ${(props) => props.$position};
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
  $maxWidth,
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
      $maxWidth={$maxWidth}
      {...restProps}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
