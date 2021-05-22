import { Button, Container, Image, Span, SVGIcon } from "components";
import { SubHeading } from "containers";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import deletePost from "utils/post/deletePost";
import { db } from "utils/firebaseConfig";

const CarWashCertificationPage = () => {
  const [images, setImages] = useState([]);
  const loginUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    db.collection("certificationImage")
      .get()
      .then((querySnapshot) => {
        let temp = [];
        querySnapshot.forEach((doc) => {
          temp.push({
            image: doc.data().image,
            name: doc.data().name,
            uploadDate: doc.data().uploadDate,
            postid: doc.data().postid,
            email: doc.data().email,
          });
        });
        setImages(temp);
      });
  }, []);

  return (
    <>
      <SubHeading to="CarWashCertificationEdit" $margin="22px 0 32px 0">
        세차 인증
      </SubHeading>
      {images.map((image) => {
        return (
          <Container $flexFlow="column" $margin="20px 0 15px 0">
            <Container
              $margin="0 30px 10px 30px"
              $justifyContent="space-between"
            >
              <Span $fontSize="1.5rem">{image.name}</Span>
              {loginUser && loginUser.email === image.email && (
                <Button
                  $backgroundColor="inherit"
                  onClick={() => deletePost("certificationImage", image.postid)}
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
    </>
  );
};

export default CarWashCertificationPage;
