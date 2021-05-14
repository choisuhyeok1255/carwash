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
`;

const Container = ({
  $flexFlow,
  $justifyContent,
  $alignItems,
  $flexWrap,
  $width,
  $margin,
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
      {...restProps}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
