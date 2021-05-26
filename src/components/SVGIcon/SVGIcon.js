import React from "react";
import { ReactComponent as PlusButton } from "assets/PlusButton.svg";
import { ReactComponent as CloseButton } from "assets/CloseButton.svg";
import { ReactComponent as CloseButtonBlack } from "assets/CloseButtonBlack.svg";
import { ReactComponent as Google } from "assets/Google.svg";
import { ReactComponent as Kakao } from "assets/Kakao.svg";
import { ReactComponent as Naver } from "assets/Naver.svg";
import { ReactComponent as ModifyPen } from "assets/ModifyPen.svg";
import { ReactComponent as SportsCar } from "assets/SportsCar.svg";
import { ReactComponent as Certification } from "assets/Certification.svg";
import { ReactComponent as HamburgerMenu } from "assets/HamburgerMenu.svg";
import { ReactComponent as Map } from "assets/Map.svg";
import { ReactComponent as Review } from "assets/Review.svg";
import { ReactComponent as AttendanceCheck } from "assets/AttendanceCheck.svg";
import { ReactComponent as Crown } from "assets/Crown.svg";
import { ReactComponent as FirstMedal } from "assets/FirstMedal.svg";
import { ReactComponent as SecondMedal } from "assets/SecondMedal.svg";
import { ReactComponent as ThirdMedal } from "assets/ThirdMedal.svg";
import { ReactComponent as Heart } from "assets/Heart.svg";

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
    case "CloseButtonBlack":
      SVGIcon = CloseButtonBlack;
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
    case "ModifyPen":
      SVGIcon = ModifyPen;
      break;
    case "SportsCar":
      SVGIcon = SportsCar;
      break;
    case "Certification":
      SVGIcon = Certification;
      break;
    case "HamburgerMenu":
      SVGIcon = HamburgerMenu;
      break;
    case "Map":
      SVGIcon = Map;
      break;
    case "Review":
      SVGIcon = Review;
      break;
    case "AttendanceCheck":
      SVGIcon = AttendanceCheck;
      break;
    case "Crown":
      SVGIcon = Crown;
      break;
    case "FirstMedal":
      SVGIcon = FirstMedal;
      break;
    case "SecondMedal":
      SVGIcon = SecondMedal;
      break;
    case "ThirdMedal":
      SVGIcon = ThirdMedal;
      break;
    case "Heart":
      SVGIcon = Heart;
      break;
  }
  return <SVGIcon width={$width} height={$height} {...restProps} />;
};

export default SVGIcon;
