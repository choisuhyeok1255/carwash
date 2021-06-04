import { Container, LinkToWebsite } from "components";
import React from "react";

const HamburgerMenu = () => {
  return (
    <Container $flexFlow="column" $maxWidth="420px" $margin="0 auto">
      <LinkToWebsite
        href="https://www.youtube.com/channel/UCB3TwWFdgQnu0Q3iLc4ZXLA"
        title="세차영상 유튜브 바로가기"
      >
        세차 영상
      </LinkToWebsite>
      <LinkToWebsite
        href={
          "https://theshiningday.com/?NaPm=ct%3Dkoirmwj6%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3D%7Chk%3D00ce3c8abe5fc98310526b120501752573f395f7"
        }
        title="세차용품 쇼핑몰 바로가기"
      >
        쇼핑몰
      </LinkToWebsite>
      <LinkToWebsite
        href="https://github.com/choisuhyeok1255"
        title="제작자 깃허브 페이지"
      >
        만든이: choisuhyeok
      </LinkToWebsite>
    </Container>
  );
};

export default HamburgerMenu;
