import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
  /*if (true) {
    throw new Error("Nooooooo !");
  }
  */

  const cardComponent = robots.map((user, i) => {
    return (
      <Card 
        key={user.id} 
        id={user.id} 
        name={user.name} 
        email={user.email} 
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