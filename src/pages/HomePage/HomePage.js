import { DivisionLine } from "components";
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
      <DivisionLine $margin="30px 0" />
      <CarWashCertification />
      <DivisionLine $margin="30px 0" />
      <CarWashGoodsReview />
    </>
  );
};

export default HomePage;
