import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  margin: ${(props) => props.$margin};
  position: ${(props) => props.$position};
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  border-radius: ${(props) => props.$borderRadius};
  z-index: ${(props) => props.$zIndex};
`;

const Image = ({
  src,
  alt,
  $width,
  $height,
  $margin,
  $position,
  $top,
  $left,
  $borderRadius,
  $zIndex,
  ...restProps
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      $width={$width}
      $height={$height}
      $margin={$margin}
      $position={$position}
      $top={$top}
      $left={$left}
      $borderRadius={$borderRadius}
      $zIndex={$zIndex}
      {...restProps}
    />
  );
};

export default Image;
