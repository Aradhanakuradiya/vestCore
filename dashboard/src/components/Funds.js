import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import "./Funds.css";
import { UserContext } from "../context/UserContext";

const Funds = () => {
  const [openAddFunds, setOpenAddFunds] = useState(false);
  const [openWithdrawFunds, setOpenWithdrawFunds] = useState(false);
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const { userId } = useContext(UserContext);

  const handleOpenAddFunds = () => setOpenAddFunds(true);
  const handleCloseAddFunds = () => setOpenAddFunds(false);

  const handleOpenWithdrawFunds = () => setOpenWithdrawFunds(true);
  const handleCloseWithdrawFunds = () => setOpenWithdrawFunds(false);

  const handleAddFunds = async () => {
    try {
      const response = await fetch("http://localhost:3002/addFunds", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          amount: parseFloat(amount),
          paymentMethod,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Funds added successfully! New balance: ${data.balance}`);
      } else {
        const errorData = await response.json();
        alert(`Failed to add funds: ${errorData.error}`);
      }
    } catch (error) {
      alert("An error occurred while adding funds. Please try again.");
    }
    handleCloseAddFunds();
  };

  const handleWithdrawFunds = async () => {
    try {
      const response = await fetch("http://localhost:3002/withdrawFunds", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, amount: parseFloat(amount) }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Funds withdrawn successfully! New balance: ${data.balance}`);
      } else {
        const errorData = await response.json();
        alert(`Failed to withdraw funds: ${errorData.error}`);
      }
    } catch (error) {
      alert("An error occurred while withdrawing funds. Please try again.");
    }
    handleCloseWithdrawFunds();
  };

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <div className="fund-buttons">
          <Button variant="contained" onClick={handleOpenAddFunds}>
            Add Funds
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleOpenWithdrawFunds}
          >
            Withdraw
          </Button>
        </div>
      </div>

      {/* Add Funds Modal */}
      <Modal open={openAddFunds} onClose={handleCloseAddFunds}>
        <div className="modal-content">
          <h3>Add Funds</h3>
          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
          />
          <h4>Select Payment Method</h4>
          <RadioGroup
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "300px" }}>
              <FormControlLabel value="UPI" control={<Radio />} label="UPI" />
              <img
                style={{ height: "50px", width: "60px" }}
                src="upi.jpg"
                alt="UPI"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "190px" }}>
            <FormControlLabel
              value="Credit/Debit Card"
              control={<Radio />}
              label="Credit/Debit Card"
            />
            <img
                style={{ height: "50px", width: "60px" }}
                src="card.jpg"
                alt="Card"
              />
            </div>
          </RadioGroup>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddFunds}
            style={{ marginTop: "10px" }}
          >
            Confirm
          </Button>
        </div>
      </Modal>

      <Modal open={openWithdrawFunds} onClose={handleCloseWithdrawFunds}>
        <div className="modal-content">
          <h3>Withdraw Funds</h3>
          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleWithdrawFunds}
            style={{ marginTop: "10px" }}
          >
            Confirm
          </Button>
        </div>
      </Modal>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p style={{ color: "black" }}>Available margin</p>
              <p style={{ color: "green", fontWeight: "bold" }}>4,043.10</p>
            </div>
            <div className="data">
              <p style={{ color: "black" }}>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p style={{ color: "black" }}>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p style={{ color: "black" }}>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p style={{ color: "black" }}>Payin</p>
              <p>4,064.00</p>
            </div>
            <div className="data">
              <p style={{ color: "black" }}>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p style={{ color: "black" }}>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p style={{ color: "black" }}>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p style={{ color: "black" }}>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p style={{ color: "black" }}>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p style={{ color: "black" }}>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p style={{ color: "black" }}>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
