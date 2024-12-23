/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

//for trending section on homepage

const TopRated = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };
  console.log(endPoint);
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        {/* we use here switchTabs for day or week tab and we passing day week prop in array */}
        <SwitchTabs data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} endPoint={endPoint} loading={loading} />
    </div>
  );
};

export default TopRated;
