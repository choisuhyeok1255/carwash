import {
  CarWashCertification,
  CarWashGoodsReview,
  YoutubeAndShop,
  SearchCarWash,
} from "containers";
import React from "react";

const HomePage = () => {
  return (
    <>
      <YoutubeAndShop />
      <SearchCarWash />
      <CarWashCertification />
      <CarWashGoodsReview />
    </>
  );
};

export default HomePage;
