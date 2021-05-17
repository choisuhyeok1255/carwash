import React from "react";
import { ReactComponent as PlusButton } from "assets/PlusButton.svg";
import { ReactComponent as CloseButton } from "assets/CloseButton.svg";
import { ReactComponent as Google } from "assets/Google.svg";
import { ReactComponent as Kakao } from "assets/Kakao.svg";
import { ReactComponent as Naver } from "assets/Naver.svg";

const SVGIcon = ({ type, $width, $height, ...restProps }) => {
  let SVGIcon = null;

  switch (type) {
    default:
    case "PlusButton":
      SVGIcon = PlusButton;
      break;
    case "CloseButton":
      SVGIcon = CloseButton;
      break;
    case "Google":
      SVGIcon = Google;
      break;
    case "Kakao":
      SVGIcon = Kakao;
      break;
    case "Naver":
      SVGIcon = Naver;
      break;
  }
  return <SVGIcon width={$width} height={$height} {...restProps} />;
};

export default SVGIcon;
