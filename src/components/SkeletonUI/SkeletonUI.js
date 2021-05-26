import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const StyledSkeletonUI = styled(Skeleton)`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  margin: ${(props) => props.$margin};
`;

const SkeletonUI = ({ $width, $height, $margin, ...restProps }) => {
  return (
    <StyledSkeletonUI
      $width={$width}
      $height={$height}
      $margin={$margin}
      {...restProps}
    />
  );
};

export default SkeletonUI;
