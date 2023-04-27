import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
import { Rating } from "@mui/material";
const Moviecard = ({ el }) => {
  
  console.log("el",el)
  return (
    <div>
      <p>{el.name}</p>
    </div>
  );
};

export default Moviecard;
