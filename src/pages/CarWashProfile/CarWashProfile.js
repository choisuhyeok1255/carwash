import { Container, Image, Span, SVGIcon } from "components";
import { MainHeading } from "containers";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "utils/firebaseConfig";

const CarWashProfile = () => {
  const [certificationImages, setCertificationImages] = useState([]);
  const [goodsReviews, setGoodsReviews] = useState([]);
  const userProfile = useSelector((state) => state.auth.currentUser);
  const { name, email, uid } = userProfile;

  useEffect(() => {
    db.collection("certificationImage")
      .get()
      .then((querySnapshot) => {
        let certificationImageTemp = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().uid !== uid) return;
          certificationImageTemp.push({
            image: doc.data().image,
            name: doc.data().name,
            uploadDate: doc.data().uploadDate,
            postid: doc.data().postid,
            email: doc.data().email,
          });
        });
        setCertificationImages(certificationImageTemp);
      });

    db.collection("goodsReview")
      .get()
      .then((querySnapshot) => {
        let goodsReviewsTemp = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().uid !== uid) return;
          goodsReviewsTemp.push({
            image: doc.data().image,
            name: doc.data().name,
            uploadDate: doc.data().uploadDate,
            postid: doc.data().postid,
            email: doc.data().email,
          });
        });
        setGoodsReviews(goodsReviewsTemp);
      });
  }, []);

  return (
    <>
      <Container $flexFlow="column" $alignItems="center">
        <SVGIcon type="SportsCar" $width="200" $height="200" />
        <Span $fontSize="2rem">안녕하세요! {name}님</Span>
      </Container>
      <MainHeading
        toPage="/CarWashUserCertificationPage"
        toEdit="/CarWashCertificationEdit"
        $fontSize="2rem"
        $margin="55px 0 20px 0"
      >
        {name}님의 세차 인증
      </MainHeading>
      <Container $flexWrap="wrap" $justifyContent="space-between">
        {certificationImages.map((image) => {
          return <Image src={image.image} $width="110px" $margin="0 0 5px 0" />;
        })}
      </Container>
      <MainHeading
        toPage="/CarWashUserGoodsReviewPage"
        toEdit="/CarWashGoodsReviewEdit"
        $fontSize="2rem"
        $margin="55px 0 20px 0"
      >
        {name}님의 사용 후기
      </MainHeading>
      <Container $flexWrap="wrap" $justifyContent="space-between">
        {goodsReviews.map((image) => {
          return <Image src={image.image} $width="110px" $margin="0 0 5px 0" />;
        })}
      </Container>
    </>
  );
};

export default CarWashProfile;
