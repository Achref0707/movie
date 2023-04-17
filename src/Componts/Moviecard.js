import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
import { Rating } from "@mui/material";
const Moviecard = ({ el }) => {
  return (
    <div>
      <Card className="card" style={{width: "18rem", height: "700px" }}>
        <Card.Img variant="top" src={el.image} height="300px" />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Rating
            name="simple-controlled"
            value={el.rating} 
            readOnly
          />
          <Card.Text>{el.description}</Card.Text>
          <Button variant="primary" style={{position:"relative",top:"80px"}}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Moviecard;
