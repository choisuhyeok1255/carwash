import React from "react";
import styled from "styled-components";
import { color } from "styles/color";

const StyledLinkToWebsite = styled.a`
  font-size: 1.5rem;
  color: ${color.themeMain};
  background: white;
  border: 1px solid ${color.themeMain};
  border-radius: 5px;
  padding: 10px 15px;

  :hover {
    background: ${color.themeMain};
    color: white;
  }
`;

const LinkToWebsite = ({ href, children, ...restProps }) => {
  return (
    <StyledLinkToWebsite href={href} {...restProps}>
      {children}
    </StyledLinkToWebsite>
  );
};

export default LinkToWebsite;
