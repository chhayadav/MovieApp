/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);

  return (
    <ContentWrapper>
      <Carousel
        title="Recommendations"
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
      />
    </ContentWrapper>
  );
};

export default Recommendation;
