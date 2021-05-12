import { Container } from "components";
import { YoutubeAndShop } from "containers";
import SearchCarWash from "containers/SearchCarWash/SearchCarWash";
import React from "react";

const HomePage = () => {
  return (
    <>
      <YoutubeAndShop />
      <SearchCarWash />
    </>
  );
};

export default HomePage;
