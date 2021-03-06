import { Image, SVGIcon } from "components";
import { SearchCarWash } from "containers";
import {
  AttendanceCheckPage,
  CarWashCertificationPage,
  CarWashGoodsReviewList,
  CarWashProfile,
  HamburgerMenu,
} from "pages";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { color } from "styles/color";

const TabList = styled.ul`
  display: flex;
  position: fixed;
  width: 100%;
  max-width: 420px;
  bottom: 0px;
  margin: 0 auto;
  left: 0;
  right: 0;
  background-color: ${color.themeMain};
`;

const TabListItem = styled.li`
  width: 88px;
  height: 50px;
  margin: 0 auto;
`;

const TabListItemLogin = styled.li`
  width: 70px;
  height: 50px;
  margin: 0 auto;
`;

const TabListItemButton = styled.button`
  width: 100%;
  height: 100%;
  background: inherit;
`;

const Tab = ({ location }) => {
  const initObj = {
    activeTab: 0,
  };
  const initSelectMenu = [false, false, false, false];
  const [selectMenu, setSelectMenu] = useState(initSelectMenu);
  const selectStyled = { borderstyled: "1px solid black" };
  const loginUser = useSelector((state) => state.auth.currentUser);
  const { defaultProfileImage } = loginUser ? loginUser : "#";

  const [tabState, setTabState] = useState(initObj);
  const tabObj = {
    0: <CarWashCertificationPage />,
    1: <CarWashGoodsReviewList />,
    2: <SearchCarWash />,
    3: <AttendanceCheckPage />,
    4: <HamburgerMenu />,
  };
  const loginObj = {
    0: <CarWashCertificationPage />,
    1: <CarWashGoodsReviewList />,
    2: <SearchCarWash />,
    3: <AttendanceCheckPage />,
    4: <CarWashProfile />,
    5: <HamburgerMenu />,
  };

  const tabMenu = [
    <SVGIcon type="Certification" $width="20px" $height="20px" />,
    <SVGIcon type="Review" $width="20px" $height="20px" />,
    <SVGIcon type="Map" $width="20px" $height="20px" />,
    <SVGIcon type="AttendanceCheck" $width="20px" $height="20px" />,
    <SVGIcon type="HamburgerMenu" $width="20px" $height="20px" />,
  ];

  const tabMenuLogin = [
    <SVGIcon type="Certification" $width="20px" $height="20px" />,
    <SVGIcon type="Review" $width="20px" $height="20px" />,
    <SVGIcon type="Map" $width="20px" $height="20px" />,
    <SVGIcon type="AttendanceCheck" $width="20px" $height="20px" />,
    <Image
      src={defaultProfileImage}
      $width="20px"
      $height="20px"
      $skeletonWidth="0"
    />,
    <SVGIcon type="HamburgerMenu" $width="20px" $height="20px" />,
  ];

  //?????? ?????? ??????????????? ?????? ???????????? ?????? ????????? ?????????????????? ?????? ???????????? ????????? ???????????? ?????? ???
  if (location.state !== undefined) {
    if (location.state.activeTab) {
      initObj.activeTab = location.state.activeTab;
    }
  }

  const handlerTabClick = (id) => {
    setTabState({ activeTab: id });
    setSelectMenu(id);
  };

  return (
    <div>
      <TabList>
        {defaultProfileImage
          ? tabMenuLogin.map((menu, i) => {
              return (
                <TabListItemLogin key={i}>
                  <TabListItemButton
                    selectStyled={selectStyled}
                    onClick={() => handlerTabClick(i)}
                  >
                    {menu}
                  </TabListItemButton>
                </TabListItemLogin>
              );
            })
          : tabMenu.map((menu, i) => {
              return (
                <TabListItem key={i}>
                  <TabListItemButton
                    selectStyled={selectStyled}
                    onClick={() => handlerTabClick(i)}
                  >
                    {menu}
                  </TabListItemButton>
                </TabListItem>
              );
            })}
      </TabList>
      <div>
        {defaultProfileImage
          ? loginObj[tabState.activeTab]
          : tabObj[tabState.activeTab]}
      </div>
    </div>
  );
};

export default Tab;
