import { Container, SkeletonUI, Span } from "components";
import { SubHeading } from "containers";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import getGoodsReviewList from "utils/getItems/getGoodsReviewList";

const GoodsReviewList = styled.li`
  font-size: 2rem;
`;

const CarWashGoodsReviewList = () => {
  const [goodsReviewList, setGoodsReviewList] = useState([]);

  useEffect(() => {
    getGoodsReviewList(setGoodsReviewList);
  }, []);

  return (
    <Container $maxWidth="420px" $flexFlow="column" $margin="0 auto">
      <SubHeading to="/CarWashGoodsReviewEdit" $margin="22px 20px 22px 20px">
        용품 후기 리스트
      </SubHeading>
      <ol>
        {goodsReviewList.length === 0 ? (
          <>
            <SkeletonUI $width="100%" $height="30px" $margin="10px 0 20px 0" />
            <SkeletonUI $width="100%" $height="30px" $margin="0 0 20px 0" />
            <SkeletonUI $width="100%" $height="30px" $margin="0 0 20px 0" />
            <SkeletonUI $width="100%" $height="30px" $margin="0 0 20px 0" />
            <SkeletonUI $width="100%" $height="30px" $margin="0 0 20px 0" />
            <SkeletonUI $width="100%" $height="30px" $margin="0 0 20px 0" />
            <SkeletonUI $width="100%" $height="30px" $margin="0 0 20px 0" />
            <SkeletonUI $width="100%" $height="30px" $margin="0 0 20px 0" />
            <SkeletonUI $width="100%" $height="30px" $margin="0 0 20px 0" />
          </>
        ) : (
          goodsReviewList
            .slice(0)
            .reverse()
            .map((goodsReview, i) => {
              return (
                <GoodsReviewList key={i}>
                  <Container
                    $height="40px"
                    $justifyContent="space-between"
                    $alignItems="center"
                    $margin="0 20px"
                  >
                    <Link
                      to={{
                        pathname: `/CarWashGoodsReviewPage/${goodsReview.postid}`,
                        state: {
                          postid: goodsReview.postid,
                        },
                      }}
                    >
                      <Span>{goodsReview.subject}</Span>
                    </Link>
                    <Container $width="110px" $justifyContent="space-between">
                      <Span $fontSize="1.2rem">{goodsReview.name}</Span>
                      <Span $fontSize="1.2rem">{goodsReview.uploadDate}</Span>
                    </Container>
                  </Container>
                </GoodsReviewList>
              );
            })
        )}
      </ol>
    </Container>
  );
};

export default CarWashGoodsReviewList;
