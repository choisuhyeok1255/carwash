import { SVGIcon } from "components";
import { SearchCarWash } from "containers";
import {
  AttendanceCheckPage,
  CarWashCertificationPage,
  CarWashGoodsReviewList,
  HamburgerMenu,
} from "pages";
import React, { useState } from "react";
import styled from "styled-components";
import { color } from "styles/color";

const TabList = styled.ul`
  display: flex;
  position: fixed;
  width: 420px;
  bottom: 0;
  background-color: ${color.themeMain};
`;

const TabListItem = styled.li`
  width: 88px;
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

  const [tabState, setTabState] = useState(initObj);
  const tabObj = {
    0: <CarWashCertificationPage />,
    1: <CarWashGoodsReviewList />,
    2: <SearchCarWash />,
    3: <AttendanceCheckPage />,
    4: <HamburgerMenu />,
  };

  const tabMenu = [
    <SVGIcon type="Certification" $width="20px" $height="20px" />,
    <SVGIcon type="Review" $width="20px" $height="20px" />,
    <SVGIcon type="Map" $width="20px" $height="20px" />,
    <SVGIcon type="AttendanceCheck" $width="20px" $height="20px" />,
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
        {tabMenu.map((menu, i) => {
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
      <div>{tabObj[tabState.activeTab]}</div>
    </div>
  );
};

export default Tab;
