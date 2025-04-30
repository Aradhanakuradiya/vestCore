import React, { useContext, useState } from "react";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow, Dialog, DialogContent } from "@mui/material";
import { DoughnoutChart } from "./DoughnoutChart";
import { VerticalGraph } from "./VerticalGraph";
import { Line } from "react-chartjs-2";
import { watchlist } from "../data/data"; 
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement, 
  LineElement,
  Title,
  ChartTooltip,
  Legend
);

const WatchList = () => {
  const data = {
    labels: watchlist.map((stock) => stock.name), // Stock names
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price), // Stock prices
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      {/* Watchlist Items */}
      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      {/* Doughnut Chart */}
      <DoughnoutChart data={data} />
    </div>
  );
};

export default WatchList;

// WatchListItem Component
const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = () => setShowWatchListActions(true);
  const handleMouseExit = () => setShowWatchListActions(false);

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && (
        <WatchListActions uid={stock.name} stock={stock} />
      )}
    </li>
  );
};

// WatchListActions Component
const WatchListActions = ({ uid, stock }) => {
  const [openDetails, setOpenDetails] = useState(false);
  const [openGraph, setOpenGraph] = useState(false);
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => generalContext.openBuyWindow(uid);
 // const handleSellClick = () => generalContext.openSellWindow(uid);
  const handleAnalyticsClick = () => setOpenGraph(true);
  const handleCloseGraph = () => setOpenGraph(false);
  const handleMoreClick = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);

  const graphData = {
    labels: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: `${stock.name} Price`,
        data: stock.priceHistory || [100, 120, 110, 130, 125, 140],
        backgroundColor: "rgba(18, 163, 88, 0.2)",
        borderColor: "rgb(190, 192, 75)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Green points
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  // Graph options
  const graphOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${stock.name} Price History`,
      },
    },
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={handleBuyClick}>
            Buy
          </button>
        </Tooltip>

        {/* <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell" onClick={handleSellClick}>
            Sell
          </button>
        </Tooltip> */}
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action" onClick={handleAnalyticsClick}>
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action" onClick={handleMoreClick}>
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>

      {/* Analytics Modal */}
      <Dialog
        open={openGraph}
        onClose={handleCloseGraph}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <h3>{stock.name} Price Analytics</h3>
          <VerticalGraph data={graphData} />
        </DialogContent>
      </Dialog>

      {/* Stock Details Modal */}
      <Dialog
        open={openDetails}
        onClose={handleCloseDetails}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent
          style={{
            background:
              "linear-gradient(135deg, rgb(220, 220, 220), rgb(245, 234, 234))",
            padding: "30px",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            color: "#555555",
          }}
        >
          <h1
            style={{
              color: stock.isDown ? "red" : "green", // Red for loss, green for profit
              fontSize: "27px",
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            {stock.name} 
          </h1>
          <p
            style={{
              color: stock.isDown ? "red" : "green",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Price: <span style={{ fontWeight: "700" }}>{stock.price}</span>
          </p>
          <p style={{ color: "#d32f2f", fontSize: "18px", fontWeight: "500" }}>
            52-Week High:{" "}
            <span style={{ color: "#388e3c", fontWeight: "700" }}>
              {stock.fiftyTwoWeekHigh}
            </span>
          </p>
          <p style={{ color: "#d32f2f", fontSize: "18px", fontWeight: "500" }}>
            52-Week Low:{" "}
            <span style={{ color: "#f44336", fontWeight: "700" }}>
              {stock.fiftyTwoWeekLow}
            </span>
          </p>
          <p style={{ color: "#d32f2f", fontSize: "18px", fontWeight: "500" }}>
            Dividend Yield:{" "}
            <span style={{ color: "#388e3c", fontWeight: "700" }}>
              {stock.dividendYield || "N/A"}%
            </span>
          </p>
          <p style={{ color: "#d32f2f", fontSize: "18px", fontWeight: "500" }}>
            EPS:{" "}
            <span style={{ color: "#388e3c", fontWeight: "700" }}>
              {stock.eps}
            </span>
          </p>
          <p style={{ color: "#d32f2f", fontSize: "18px", fontWeight: "500" }}>
            P/E Ratio:{" "}
            <span style={{ color: "#388e3c", fontWeight: "700" }}>
              {stock.peRatio}
            </span>
          </p>

          
          {/* Line Chart for Price History */}
          <div style={{ marginTop: "20px" }}>
          <Line key={stock.name} data={graphData} options={graphOptions} />
          </div>
        </DialogContent>
      </Dialog>
    </span>
  );
};
