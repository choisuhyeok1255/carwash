import {
  Button,
  Container,
  DivisionLine,
  Image,
  LinkButton,
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
    <Container $maxWidth="420px" $flexFlow="column" $margin="0 auto 80px auto">
      <SubHeading to="CarWashCertificationEdit" $margin="22px 20px 12px 20px">
        세차 인증
      </SubHeading>
      <ul>
        {images
          .slice(0)
          .reverse()
          .map((image, i) => {
            return (
              <li key={i}>
                <Container $flexFlow="column" $margin="20px 0 15px 0">
                  <Container
                    $margin="0 30px 5px 20px"
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
                  <Container $margin="20px 0 0 20px" $alignItems="center">
                    <Button
                      $backgroundColor="inherit"
                      $display="flex"
                      $margin="0 10px 0 0"
                      onClick={() => {
                        likeCountPlus(image.postid, setImages);
                      }}
                    >
                      <SVGIcon type="Heart" $width="20px" $height="20px" />
                    </Button>
                    <LinkButton
                      to={{
                        pathname: `/CarWashCertificationReviewPage/${image.postid}`,
                        state: { postid: image.postid },
                      }}
                      $backgroundColor="inherit"
                      $display="flex"
                    >
                      <SVGIcon type="Comment" $width="20px" $height="20px" />
                    </LinkButton>
                  </Container>
                  <Span $fontSize="1.4rem" $margin="10px 0 0 20px">
                    좋아요 &nbsp;{image.likeCount}개
                  </Span>
                  <LinkButton
                    to={{
                      pathname: `/CarWashCertificationReviewPage/${image.postid}`,
                      state: { postid: image.postid },
                    }}
                    $fontSize="1.4rem"
                    $margin="10px 0 0 20px"
                    $backgroundColor="inherit"
                  >
                    댓글 {image.comment.length}개 모두 보기
                  </LinkButton>
                  <Span $margin="10px 0 30px 20px" $fontSize="1.2rem">
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
