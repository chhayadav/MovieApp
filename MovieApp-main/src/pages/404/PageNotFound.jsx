import React from "react";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
  return (
    <div className="pageNotfound">
      <ContentWrapper>
        <h1>404 Page Not Found</h1>
        <p>We're sorry, but the page you requested could not be found.</p>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
