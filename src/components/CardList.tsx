import React from "react";
import Card from "./Card";
import { Robot } from "../containers/App";

type CardListProps = {
  robots: Robot[];
}

const CardList = ({robots}: CardListProps) => {

  const cardComponent = robots.map((robot, i) => {
    return (
      <Card 
        key={robot.id} 
        robot={robot} 
      />
    );
  });

  return cardComponent;
  
}

export default CardList;



/*
Inline Variante
  return (
    <>
    {
      robots.map((user, i) => {
        return (
          <Card 
            key={user.id} 
            id={user.id} 
            name={user.name} 
            email={user.email} 
          />
        );
      })
    }
    </>
  );
}
*/