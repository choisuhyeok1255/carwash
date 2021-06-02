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
import { likeCountPlus } from "utils/likeCount";
import getCertificationPost from "utils/post/getCertificationPost";

const CarWashCertificationPage = () => {
  const [images, setImages] = useState([]);
  const loginUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    getCertificationPost("certificationImage", setImages);
  }, []);

  return (
    <Container $flexFlow="column" $margin="0 0 80px 0">
      <SubHeading to="CarWashCertificationEdit" $margin="22px 20px 12px 20px">
        세차 인증
      </SubHeading>
      <ul>
        {images.map((image, i) => {
          return (
            <li key={i}>
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
                      likeCountPlus(image.postid, setImages);
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
    </Container>
  );
};

export default CarWashCertificationPage;
