import React from "react";
import { Robot } from "../containers/App";

type CardProps = {
  robot: Robot
}

const Card = ({ robot }: CardProps) => {
  const { id, name, email } = robot;

  return (
    <div className="bg-gray dib br4 pa3 ma2 grow bw3 shadow-5 tc card">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
      <div>
        <h2> {name} </h2>
        <p> {email} </p>
      </div>
    </div>
  );
}

export default Card;
