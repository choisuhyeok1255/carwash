import {
  Button,
  Container,
  Heading,
  Image,
  LinkButton,
  Paragraph,
  Span,
  SVGIcon,
} from "components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "utils/firebaseConfig";
import deletePost from "utils/post/deletePost";

const CarWashUserGoodsReviewPage = () => {
  const [goodsReview, setGoodsReview] = useState([]);
  const loginUser = useSelector((state) => state.auth.currentUser);
  const { uid } = loginUser;

  useEffect(() => {
    db.collection("goodsReview")
      .get()
      .then((querySnapshot) => {
        let temp = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().uid !== uid) return;
          temp.push({
            image: doc.data().image,
            name: doc.data().name,
            uploadDate: doc.data().uploadDate,
            subject: doc.data().subject,
            mainText: doc.data().mainText,
            postid: doc.data().postid,
            email: doc.data().email,
          });
        });
        setGoodsReview(temp);
      });
  }, [uid]);

  return (
    <>
      <Container $flexFlow="column" $margin="22px 0 0 0">
        {goodsReview.map((review, index) => {
          return (
            <Container
              $flexFlow="column"
              $padding="10px 20px"
              $width="354px"
              $border="1px solid black"
              $borderRadius="10px"
              $margin="0 0 20px 0"
            >
              <Container $margin="0 0 10px 0" $justifyContent="space-between">
                <Span $fontSize="1.5rem">{review.name}</Span>
                {loginUser && loginUser.email === review.email && (
                  <Button
                    $backgroundColor="inherit"
                    onClick={() => deletePost("goodsReview", review.postid)}
                  >
                    <SVGIcon
                      type="CloseButtonBlack"
                      $width="10px"
                      $height="10px"
                    />
                  </Button>
                )}
              </Container>
              <Image
                src={review.image}
                alt="사진"
                $width="100%"
                $margin="0 0 10px 0"
              />
              <Container $alignItems="center" $margin="0 0 10px 0">
                <Heading
                  as="h3"
                  $fontSize="2rem"
                  $fontWeight="400"
                  $margin="0 5px 0 0"
                >
                  {review.subject}
                </Heading>
                {loginUser && loginUser.email === review.email && (
                  <LinkButton
                    to={{
                      pathname: "/CarWashGoodsReviewModifyPage",
                      state: {
                        reviewSubject: `${review.subject}`,
                        reviewMainText: `${review.mainText}`,
                        reviewImage: `${review.image}`,
                        reviewName: `${review.name}`,
                        postid: `${review.postid}`,
                      },
                    }}
                    $width="15px"
                    $height="15px"
                    $backgroundColor="inherit"
                  >
                    <SVGIcon type="ModifyPen" $width="15px" $height="15px" />
                  </LinkButton>
                )}
              </Container>
              <Paragraph $fontSize="1.5rem" $lineHeight="2rem">
                {review.mainText}
              </Paragraph>
            </Container>
          );
        })}
      </Container>
    </>
  );
};

export default CarWashUserGoodsReviewPage;
