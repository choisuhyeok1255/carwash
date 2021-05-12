import React from "react";
import styled from "styled-components";

const StyledLinkToWebsite = styled.a``;

const LinkToWebsite = ({ href, children, ...restProps }) => {
  return (
    <StyledLinkToWebsite href={href} {...restProps}>
      {children}
    </StyledLinkToWebsite>
  );
};

export default LinkToWebsite;
