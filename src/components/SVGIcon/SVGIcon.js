import React from "react";
import { ReactComponent as PlusButton } from "assets/PlusButton.svg";

const SVGIcon = ({ type, $width, $height, ...restProps }) => {
  let SVGIcon = null;
  switch (type) {
    default:
    case "PlusButton":
      SVGIcon = PlusButton;
      break;
  }
  return <SVGIcon width={$width} height={$height} {...restProps} />;
};

export default SVGIcon;
