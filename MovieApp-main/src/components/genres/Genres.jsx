import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  console.log(genres);

  return (
    <div className="genres">
      {data?.map((genreId) => {
        if (!genres[genreId]?.name) return;
        //if genres or id is not present in Api then it will give error so we will check condition and return
        return (
          <div key={genreId} className="genre">
            {genres[genreId]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
