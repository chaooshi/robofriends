import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if(false) {
    throw new Error("Ooops, falcy world!")
  }
  return (
    <div>
      {robots.map((robot) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
