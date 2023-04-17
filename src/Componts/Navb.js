import React from "react";
import "../App.css";
import { Rating } from "@mui/material";
function Navb() {
  return (
    <div className="navb">
      <div className="film">
        <img src="https://img.icons8.com/external-dreamcreateicons-outline-color-dreamcreateicons/64/000000/external-movie-museum-dreamcreateicons-outline-color-dreamcreateicons-2.png" />
        <h1>Movie.tn</h1>
      </div>
      <div className="search">
      <Rating name="size-medium" defaultValue={0} />
        <input type="text" className="button-30" placeholder="Movie name" />
        <button class="button-32" role="button">
          search
        </button>
      </div>
    </div>
  );
}

export default Navb;
