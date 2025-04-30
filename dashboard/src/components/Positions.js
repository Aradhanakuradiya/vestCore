import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar} from "react-chartjs-2"; 
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allPositions").then((res) => {
      console.log(res.data);
      setAllPositions(res.data);
    });
  }, []);


  const barChartData = {
    labels: allPositions.map((stock) => stock.name), // Instrument names
    datasets: [
      {
        label: "Profit & Loss (P&L)",
        data: allPositions.map((stock) => (stock.price * stock.qty - stock.avg * stock.qty).toFixed(2)), // P&L values
        backgroundColor: allPositions.map((stock) =>
          stock.price * stock.qty - stock.avg * stock.qty >= 0 ? "rgba(75, 192, 192, 0.6)" : "rgba(255, 99, 132, 0.6)"
        ), // Green for profit, red for loss
        borderColor: allPositions.map((stock) =>
          stock.price * stock.qty - stock.avg * stock.qty >= 0 ? "rgba(75, 192, 192, 1)" : "rgba(255, 99, 132, 1)"
        ),
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Profit & Loss (P&L) by Instrument",
      },
    },
  };

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>
      {/* Positions Table */}
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";
              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      <br></br>
          {/* Bar Chart */}
      <div className="chart-container" style={{ width: "80%", margin: "0 auto", marginBottom: "20px" }}>
        <Bar data={barChartData} options={chartOptions} />
      </div>
      </div>
    </>
  );
};

export default Positions;