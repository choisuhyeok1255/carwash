import React from "react";
import styled from "styled-components";

const StyledUlContainer = styled.ul`
  display: ${(props) => props.$display};
  justify-content: ${(props) => props.$justifyContent};
  flex-flow: ${(props) => props.$flexFlow};
`;

const UlContainer = ({
  children,
  $display,
  $justifyContent,
  $flexFlow,
  ...restProps
}) => {
  return (
    <StyledUlContainer
      $display={$display}
      $justifyContent={$justifyContent}
      $flexFlow={$flexFlow}
      {...restProps}
    >
      {children}
    </StyledUlContainer>
  );
};

export default UlContainer;
