import React from "react";
import styled from "styled-components";
import { color } from "styles/color";

const StyledLinkToWebsite = styled.a`
  font-size: 1.5rem;
  color: ${color.themeMain};
  border-top: ${(props) => props.$borderTop};
  border-bottom: 1px solid ${color.themeMain};
  width: 100%;
  height: 70px;
  line-height: 70px;
  text-align: center;

  :hover {
    background: ${color.themeMain};
    color: white;
  }
`;

const LinkToWebsite = ({ href, children, $borderTop, ...restProps }) => {
  return (
    <StyledLinkToWebsite href={href} $borderTop={$borderTop} {...restProps}>
      {children}
    </StyledLinkToWebsite>
  );
};

export default LinkToWebsite;
