import {
  Container,
  DivisionLine,
  Heading,
  Image,
  LinkButton,
  Paragraph,
  Span,
  SVGIcon,
} from "components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { color } from "styles/color";
import getGoodsReviewListItem from "utils/getItems/getGoodsReviewListItem";

const CarWashGoodsReviewPage = ({ location }) => {
  const [goodsReview, setGoodsReview] = useState([]);
  const loginUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    getGoodsReviewListItem(location.state.postid, setGoodsReview);
  }, [location.state.postid]);

  return (
    <>
      <LinkButton
        to="/CarWashGoodsReviewList"
        $display="block"
        $fontSize="1.3rem"
        $margin="15px 0"
        $color={color.themeMain}
      >
        용품 사용 후기 &gt;
      </LinkButton>
      <Container
        $justifyContent="space-between"
        $alignItems="center"
        $margin="10px 0 10px 0"
      >
        <Heading $fontSize="3rem" $fontWeight="400">
          {goodsReview.subject}
        </Heading>
        {loginUser && loginUser.email === goodsReview.email && (
          <LinkButton
            to={{
              pathname: "/CarWashGoodsReviewModifyPage",
              state: {
                reviewSubject: `${goodsReview.subject}`,
                reviewMainText: `${goodsReview.mainText}`,
                reviewImage: `${goodsReview.image}`,
                reviewName: `${goodsReview.name}`,
                postid: `${goodsReview.postid}`,
              },
            }}
            $width="20px"
            $height="20px"
            $backgroundColor="inherit"
          >
            <SVGIcon type="ModifyPen" $width="20px" $height="20px" />
          </LinkButton>
        )}
      </Container>
      <Container $flexFlow="column" $margin="0 0 10px 0">
        <Span $fontSize="1.5rem" $margin="0 0 5px 0">
          {goodsReview.name}
        </Span>
        <Span $fontSize="1.2rem">{goodsReview.uploadDate}</Span>
      </Container>
      <DivisionLine $margin="10px 0" />
      <Paragraph $fontSize="1.8rem" $margin="0 0 10px 0">
        {goodsReview.mainText}
      </Paragraph>
      <Image src={goodsReview.image} $width="100%" />
    </>
  );
};

export default CarWashGoodsReviewPage;
