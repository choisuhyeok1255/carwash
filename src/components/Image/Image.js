import { SkeletonUI } from "components";
import React, { useState } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: ${(props) => props.$width};
  max-width: ${(props) => props.$maxWidth};
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
  $skeletonWidth,
  ...restProps
}) => {
  const [isImgLoading, setIsImgLoading] = useState(true);

  const handlerIsImgLoading = () => {
    setIsImgLoading(false);
  };
  return (
    <>
      {isImgLoading ? (
        <SkeletonUI $height={$skeletonWidth ? $skeletonWidth : `320px`} />
      ) : null}
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
        onLoad={handlerIsImgLoading}
        {...restProps}
      />
    </>
  );
};

export default Image;
