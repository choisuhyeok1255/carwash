import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: ${(props) => props.$width};
  margin: ${(props) => props.$margin};
`;

const Image = ({ src, alt, $width, $margin, ...restProps }) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      $width={$width}
      $margin={$margin}
      {...restProps}
    />
  );
};

export default Image;
