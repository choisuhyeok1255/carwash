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
      <Heading $margin="22px 0  ">용품 후기 리스트</Heading>
      <ol>
        {goodsReviewList.map((goodsReview) => {
          return (
            <>
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
                  <GoodsReviewList>{goodsReview.subject}</GoodsReviewList>
                </Link>
                <Container $width="100px" $justifyContent="space-between">
                  <Span>{goodsReview.name}</Span>
                  <Span>{goodsReview.uploadDate}</Span>
                </Container>
              </Container>
            </>
          );
        })}
      </ol>
    </>
  );
};

export default CarWashGoodsReviewList;
