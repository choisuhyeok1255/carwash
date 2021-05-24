import { Container, Heading, Span } from "components";
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
    <>
      <Heading $margin="22px 0">용품 후기 리스트</Heading>
      <ol>
        {goodsReviewList.map((goodsReview, i) => {
          return (
            <GoodsReviewList key={i}>
              <Container
                $height="40px"
                $justifyContent="space-between"
                $alignItems="center"
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
        })}
      </ol>
    </>
  );
};

export default CarWashGoodsReviewList;
