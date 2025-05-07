import React from "react";
import "./NiftyPage.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SensexPage = () => {
  const sensex = {
    name: "SENSEX",
    currentPrice: 73522.85,
    change: -118.2,
    percent: "-0.16%",
    dayHigh: 73850.0,
    dayLow: 73200.5,
    prevClose: 73641.05,
    volume: "1.1 Cr",
  };

  const chartData = [
    { time: "10 AM", price: 73300 },
    { time: "11 AM", price: 73450 },
    { time: "12 PM", price: 73510 },
    { time: "1 PM", price: 73400 },
    { time: "2 PM", price: 73380 },
    { time: "3 PM", price: 73522.85 },
  ];

  return (
    <div className="nifty-page">
      <h1>{sensex.name} - Market Overview</h1>
      <div className="nifty-card">
        <div className="nifty-row">
          <span>Current Price:</span>
          <span>₹{sensex.currentPrice}</span>
        </div>
        <div className="nifty-row">
          <span>Change:</span>
          <span className={sensex.change >= 0 ? "positive" : "negative"}>
            {sensex.change} ({sensex.percent})
          </span>
        </div>
        <div className="nifty-row">
          <span>Day High:</span>
          <span>₹{sensex.dayHigh}</span>
        </div>
        <div className="nifty-row">
          <span>Day Low:</span>
          <span>₹{sensex.dayLow}</span>
        </div>
        <div className="nifty-row">
          <span>Previous Close:</span>
          <span>₹{sensex.prevClose}</span>
        </div>
        <div className="nifty-row">
          <span>Volume:</span>
          <span>{sensex.volume}</span>
        </div>
      </div>

      <div className="nifty-chart">
        <h2>Intraday Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="time" />
            <YAxis domain={['dataMin - 100', 'dataMax + 100']} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#f39c12"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SensexPage;
