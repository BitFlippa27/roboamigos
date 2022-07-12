import React from "react";
//we are destructuring the props right inside of the brackets
const Card = ({name, email, id}) => {
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