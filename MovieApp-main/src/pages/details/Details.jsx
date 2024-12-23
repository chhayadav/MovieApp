/* eslint-disable no-unused-vars */
import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import "./style.scss";
import Similar from "./carousel/Similar";
import Recommendation from "./carousel/Recommendation";

const Details = () => {
  //Here we use useParam to navigate on the basis of dynamic links that create on clicking the movie from list
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  // console.log(credits?.crew);

  return (
    <div>
      <DetailsBanner video={data?.results[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
