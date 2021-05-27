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
  width: 420px;
  bottom: 0px;
  margin: 0 auto;
  left: 0;
  right: 0;
  background-color: ${color.themeMain};
`;

const TabListItem = styled.li`
  width: 88px;
  height: 50px;
`;

const TabListItemLogin = styled.li`
  width: 70px;
  height: 50px;
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
    <Image src={defaultProfileImage} $width="20px" $height="20px" />,
    <SVGIcon type="HamburgerMenu" $width="20px" $height="20px" />,
  ];

  //용품 후기 페이지에서 용품 사용후기 버튼 클릭시 홈페이지에서 바로 용품후기 리스트 보여주기 위한 식
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
