import React from "react";
import { Route, Routes } from "react-router-dom";
import Funds from "./Funds";
import NiftyPage from "./NiftyPage"; 
import SensexPage from "./SensexPage";
import Holdings from "./Holdings";
import { GeneralContextProvider } from "./GeneralContext";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
       <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      
      <div className="content">
        <Routes>
        <Route   path="/" index element={<Summary />} /> {/* Default route */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/nifty" element={<NiftyPage />} />
          <Route path="/sensex" element={<SensexPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;