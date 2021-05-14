import {
  CarWashCertification,
  CarWashGoodsReview,
  YoutubeAndShop,
} from "containers";
import SearchCarWash from "containers/SearchCarWash/SearchCarWash";
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
