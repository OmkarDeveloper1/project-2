import React from "react";

let myDate = new Date().toString();

const Current = () => {
  return (
    <div style={{ textAlign: "center", margin: "10px" , color:'green' }}>
      This is the current Time :-  {myDate}
    </div>
  );
};

export default Current;
