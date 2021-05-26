import {
  Button,
  Container,
  DivisionLine,
  Image,
  Span,
  SVGIcon,
} from "components";
import { SubHeading } from "containers";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import deletePost from "utils/post/deletePost";
import { db } from "utils/firebaseConfig";
import { getLikeCount } from "utils/likeCount";

const CarWashCertificationPage = () => {
  const [images, setImages] = useState([]);
  // const [likeCount, setLikeCount] = useState([]);
  const loginUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    // const likeCountTemp = [];
    const temp = [];
    db.collection("certificationImage")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          temp.push({
            image: doc.data().image,
            name: doc.data().name,
            uploadDate: doc.data().uploadDate,
            postid: doc.data().postid,
            email: doc.data().email,
            likeCount: doc.data().likeCount,
          });

          // likeCountTemp.push(doc.data().likeCount);
        });
        setImages(temp);
        // setLikeCount(likeCountTemp);
      });
  }, []);

  console.log(images);

  return (
    <>
      <SubHeading to="CarWashCertificationEdit" $margin="22px 0 32px 0">
        세차 인증
      </SubHeading>
      <ul>
        {images.map((image, i) => {
          return (
            <li key={i}>
              <Container $flexFlow="column" $margin="20px 0 15px 0">
                <Container
                  $margin="0 30px 10px 30px"
                  $justifyContent="space-between"
                >
                  <Span $fontSize="1.6rem">{image.name}</Span>
                  {loginUser && loginUser.email === image.email && (
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
                <Container $margin="20px 0 0 30px" $alignItems="center">
                  <Button
                    $backgroundColor="inherit"
                    $display="flex"
                    onClick={() => {
                      getLikeCount(image.postid);
                    }}
                  >
                    <SVGIcon type="Heart" $width="20px" $height="20px" />
                  </Button>
                  <Span $fontSize="1.4rem" $margin="0 0 0 8px">
                    {image.likeCount}
                  </Span>
                </Container>
                <Span $margin="10px 0 30px 30px" $fontSize="1.2rem">
                  {image.uploadDate}
                </Span>
                <DivisionLine />
              </Container>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CarWashCertificationPage;
