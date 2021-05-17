import React from "react";
import styled from "styled-components";

const StyledLinkToWebsite = styled.a`
  font-size: ${(props) => props.$fontSize};
`;

const LinkToWebsite = ({ href, $fontSize, children, ...restProps }) => {
  return (
    <StyledLinkToWebsite href={href} $fontSize={$fontSize} {...restProps}>
      {children}
    </StyledLinkToWebsite>
  );
};

export default LinkToWebsite;
