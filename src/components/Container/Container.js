import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  width: ${(props) => props.$width};
  justify-content: ${(props) => props.$justifyContent};
`;

const Container = ({ $width, $justifyContent, children, ...restProps }) => {
  return (
    <StyledContainer
      $width={$width}
      $justifyContent={$justifyContent}
      {...restProps}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
