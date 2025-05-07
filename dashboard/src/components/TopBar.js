import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

const TopBar = () => {
  const navigate = useNavigate();

  const goToNifty = () => {
    navigate("/nifty");
  };

  const goToSensex = () => {
    navigate("/sensex");
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div style={{cursor:"pointer",display:"flex"}}  >
          <p onClick={goToNifty} className="index">NIFTY 50</p>&nbsp;&nbsp;
          <p className="index-points">22230.45</p>&nbsp;&nbsp;
          <p className="percent">+0.38%</p>&nbsp;&nbsp;
        </div>
        <div style={{cursor:"pointer",display:"flex"}}  onClick={goToSensex}>
          <p className="index">SENSEX</p>&nbsp;&nbsp;
          <p className="index-points">73522.85</p>&nbsp;&nbsp;
          <p className="percent">-0.16%</p>
        </div>
      </div>

      <Menu />

    </div>
  );
};

export default TopBar;
