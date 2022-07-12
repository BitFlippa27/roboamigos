import React from "react";

const Scroll = props => {
  return (
    <div style={{ overflowY: "scroll", borderTop: "1px solid red", height: "800px", marginTop: "10px"}}>
      {props.children}
    </div>
  );
}

export default Scroll;