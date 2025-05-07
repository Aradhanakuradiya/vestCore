import React from "react";
import "./NiftyPage.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const NiftyPage = () => {
  const nifty = {
    name: "NIFTY 50",
    currentPrice: 22230.45,
    change: +85.2,
    percent: "+0.38%",
    dayHigh: 22310.5,
    dayLow: 22120.0,
    prevClose: 22145.25,
    volume: "1.35 Cr",
  };

  // Mock historical trend data
  const chartData = [
    { time: "10 AM", price: 22100 },
    { time: "11 AM", price: 22175 },
    { time: "12 PM", price: 22210 },
    { time: "1 PM", price: 22280 },
    { time: "2 PM", price: 22200 },
    { time: "3 PM", price: 22230 },
  ];

  return (
    <div className="nifty-page">
      <h1>{nifty.name} - Market Overview</h1>
      <div className="nifty-card">
        <div className="nifty-row">
          <span>Current Price:</span>
          <span>₹{nifty.currentPrice}</span>
        </div>
        <div className="nifty-row">
          <span>Change:</span>
          <span className={nifty.change >= 0 ? "positive" : "negative"}>
            {nifty.change} ({nifty.percent})
          </span>
        </div>
        <div className="nifty-row">
          <span>Day High:</span>
          <span>₹{nifty.dayHigh}</span>
        </div>
        <div className="nifty-row">
          <span>Day Low:</span>
          <span>₹{nifty.dayLow}</span>
        </div>
        <div className="nifty-row">
          <span>Previous Close:</span>
          <span>₹{nifty.prevClose}</span>
        </div>
        <div className="nifty-row">
          <span>Volume:</span>
          <span>{nifty.volume}</span>
        </div>
      </div>

      <div className="nifty-chart">
        <h2>Intraday Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="time" />
            <YAxis domain={['dataMin - 50', 'dataMax + 50']} />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#4caf50" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NiftyPage;
