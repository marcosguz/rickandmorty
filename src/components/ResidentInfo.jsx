import axios from "axios";
import { useState, useEffect } from "react";
import "../css/rikyMorty.css";

const ResidentInfo = ({ rikMorty }) => {
  const [rikyMortyData, setRikyMortiData] = useState({});

  useEffect(() => {
    axios.get(rikMorty).then((response) => setRikyMortiData(response.data));
  }, []);

  const getColor = () => {
    if (rikyMortyData.status === "Alive") {
      return (
        <span className="status" style={{ backgroundColor: "green" }}></span>
      )
    } else if (rikyMortyData.status === "Dead") {
      return(
        <span className="status" style={{ backgroundColor: "red" }}></span>
      )
    } else if (rikyMortyData.status === "unknown") {
      return(
        <span className="status" style={{ backgroundColor: "yellow" }}></span>
      )
    }
  };

  return (
    <div className="rickyMorty">
      <li className="item">
        
        <div className="img">
          <img src={rikyMortyData.image} />
        </div>

        <div className="info">

          <div className="info-name">
            <h3>{rikyMortyData.name}</h3>
          </div>

          <div className="info-status">
            {getColor()}
            <p className="status-title">   
                {rikyMortyData.status} - {rikyMortyData.species}
            </p>
          </div>

          <div className="info-origin">
            <p>Origin:</p>
            <span>{rikyMortyData.origin?.name}</span>
          </div>

          <div className="info-episode">
            <p>Episodes where appear:</p>
            <span>{rikyMortyData.episode?.length}</span>
          </div>

        </div>
      </li>
    </div>
  );
};

export default ResidentInfo;
