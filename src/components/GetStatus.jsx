import React from "react";

const GetStatus = ({ infoStatus }) => {
  if (infoStatus === "Alive") {
    return <div style={{background:'red', height:'10px', with: '5px', borderRadius:'50%'}}></div>;
  }
};

export default GetStatus;
