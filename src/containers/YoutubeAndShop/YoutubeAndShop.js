import { Container, LinkToWebsite } from "components";
import React from "react";

const YoutubeAndShop = () => {
  return (
    <Container $width="420px" $margin="0 auto" $justifyContent="space-between">
      <LinkToWebsite
        href={"https://www.youtube.com/channel/UCB3TwWFdgQnu0Q3iLc4ZXLA"}
      >
        세차 영상
      </LinkToWebsite>
      <LinkToWebsite
        href={
          "https://theshiningday.com/?NaPm=ct%3Dkoirmwj6%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3D%7Chk%3D00ce3c8abe5fc98310526b120501752573f395f7"
        }
      >
        쇼핑몰
      </LinkToWebsite>
    </Container>
  );
};

export default YoutubeAndShop;