import { Button, Container, Heading, Image, Span, SVGIcon } from "components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "utils/firebaseConfig";
import deletePost from "utils/post/deletePost";

const CarWashUserCertificationPage = () => {
  const [userCertificationImages, setUserCertificationImages] = useState([]);
  const userProfile = useSelector((state) => state.auth.currentUser);
  const { email, uid, name } = userProfile;

  useEffect(() => {
    db.collection("certificationImage")
      .get()
      .then((querySnapshot) => {
        let temp = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().uid !== uid) return;
          temp.push({
            image: doc.data().image,
            name: doc.data().name,
            uploadDate: doc.data().uploadDate,
            postid: doc.data().postid,
            email: doc.data().email,
            userProfileImg: doc.data().profileImg,
          });
        });
        setUserCertificationImages(temp);
      });
  }, [uid]);

  return (
    <Container $flexFlow="column" $padding="22px 0 0 0">
      <Heading>{name}님의 세차 인증</Heading>
      {userCertificationImages
        .slice(0)
        .reverse()
        .map((image) => {
          return (
            <Container $flexFlow="column" $margin="20px 0 15px 0">
              <Container
                $margin="0 30px 5px 30px"
                $justifyContent="space-between"
              >
                <Container $alignItems="center">
                  <Image
                    src={image.userProfileImg}
                    alt={`${image.name}님의 프로필사진`}
                    $width="30px"
                    $height="30px"
                    $margin="0 10px 0 0"
                    $skeletonWidth="30px"
                  />
                  <Span $fontSize="1.6rem">{image.name}</Span>
                </Container>
                {userProfile && email === image.email && (
                  <Button
                    $backgroundColor="inherit"
                    onClick={() =>
                      deletePost("certificationImage", image.postid)
                    }
                  >
                    <SVGIcon
                      type="CloseButtonBlack"
                      $width="10px"
                      $height="10px"
                    />
                  </Button>
                )}
              </Container>
              <Image src={image.image} alt="사진" $width="100%" />
              <Span $margin="10px 0 10px 30px" $fontSize="1.2rem">
                {image.uploadDate}
              </Span>
            </Container>
          );
        })}
    </Container>
  );
};

export default CarWashUserCertificationPage;
