/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

//for trending section on homepage

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endPoint}`);
  const onTabChange = (tab) => {
    setEndPoint(tab === "day" ? "day" : "week");
  };
  console.log(endPoint);
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        {/* we use here switchTabs for day or week tab and we passing day week prop in array */}
        <SwitchTabs data={["day", "week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
