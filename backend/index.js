
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

import { HoldingsModel } from "./model/HoldingModel.js";
import { PositionsModel } from "./model/PositionsModel.js";
import { OrdersModel } from "./model/OrdersModel.js";
import authRoute from "./Routes/AuthRoute.js";
import UserModel from "./model/UserModel.js";

dotenv.config(); 

const port = process.env.port || 3002;
const uri = process.env.MONGO_URL;
const app = express();

// CORS Configuration
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); 
      if (allowedOrigins.includes(origin)) {
        callback(null, true); 
      } else {
        callback(new Error("Not allowed by CORS")); 
      }
    },
    credentials: true, 
  })
);

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.send("Order saved");
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Failed to save order" });
  }
});

app.get("/orders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

app.delete("/orders/:id", async (req, res) => {
  const orderId = req.params.id;
  try {
    await OrdersModel.findByIdAndDelete(orderId);
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).json({ error: "Failed to delete order" });
  }
});

app.post("/addFunds", async (req, res) => {
  const { userId, amount, paymentMethod } = req.body;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid userId" });
  }
  if (!amount || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.balance += amount;
    await user.save();
    res.status(200).json({ message: "Funds added successfully", balance: user.balance });
  } catch (error) {
    console.error("Error adding funds:", error);
    res.status(500).json({ error: "Failed to add funds" });
  }
});

app.post("/withdrawFunds", async (req, res) => {
  const { userId, amount } = req.body;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid userId" });
  }
  if (!amount || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user.balance < amount) {
      return res.status(400).json({ error: "Insufficient balance" });
    }
    user.balance -= amount;
    await user.save();
    res.status(200).json({ message: "Funds withdrawn successfully", balance: user.balance });
  } catch (error) {
    console.error("Error withdrawing funds:", error);
    res.status(500).json({ error: "Failed to withdraw funds" });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));
});


// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");

// const { HoldingsModel } = require("./model/HoldingModel");
// const { PositionsModel } = require("./model/PositionsModel");
// const {OrdersModel } = require("./model/OrdersModel");
// // const authRoute = require("./Routes/AuthRoute");

// const  UserModel  = require("./model/UserModel");
// const port = process.env.port || 3002;
// const uri = process.env.MONGO_URL;
// const app = express();

// // app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"]; 
// app.use((req, res, next) => {
//   //console.log("Request Origin:", req.headers.origin);
//   next();
// });
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // Allow requests with no origin (like mobile apps or curl requests)
//       if (!origin) return callback(null, true);

//       if (allowedOrigins.includes(origin)) {
//         callback(null, true); // Allow the request if the origin is in the allowed list
//       } else {
//         callback(new Error("Not allowed by CORS")); // Reject the request if the origin is not allowed
//       }
//     },
//     credentials: true, // Allow cookies to be sent with requests
//   })
// );

// app.use(bodyParser.json());
// app.use(express.json());
// app.use(cookieParser());

// //dumy data should be saved only once
// // app.get("/addHoldings", async (req, res) => {
// //   let tempHoldings = [
// //     {
// //       name: "BHARTIARTL",
// //       qty: 2,
// //       avg: 538.05,
// //       price: 541.15,
// //       net: "+0.58%",
// //       day: "+2.99%",
// //     },
// //     {
// //       name: "HDFCBANK",
// //       qty: 2,
// //       avg: 1383.4,
// //       price: 1522.35,
// //       net: "+10.04%",
// //       day: "+0.11%",
// //     },
// //     {
// //       name: "HINDUNILVR",
// //       qty: 1,
// //       avg: 2335.85,
// //       price: 2417.4,
// //       net: "+3.49%",
// //       day: "+0.21%",
// //     },
// //     {
// //       name: "INFY",
// //       qty: 1,
// //       avg: 1350.5,
// //       price: 1555.45,
// //       net: "+15.18%",
// //       day: "-1.60%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "ITC",
// //       qty: 5,
// //       avg: 202.0,
// //       price: 207.9,
// //       net: "+2.92%",
// //       day: "+0.80%",
// //     },
// //     {
// //       name: "KPITTECH",
// //       qty: 5,
// //       avg: 250.3,
// //       price: 266.45,
// //       net: "+6.45%",
// //       day: "+3.54%",
// //     },
// //     {
// //       name: "M&M",
// //       qty: 2,
// //       avg: 809.9,
// //       price: 779.8,
// //       net: "-3.72%",
// //       day: "-0.01%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "RELIANCE",
// //       qty: 1,
// //       avg: 2193.7,
// //       price: 2112.4,
// //       net: "-3.71%",
// //       day: "+1.44%",
// //     },
// //     {
// //       name: "SBIN",
// //       qty: 4,
// //       avg: 324.35,
// //       price: 430.2,
// //       net: "+32.63%",
// //       day: "-0.34%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "SGBMAY29",
// //       qty: 2,
// //       avg: 4727.0,
// //       price: 4719.0,
// //       net: "-0.17%",
// //       day: "+0.15%",
// //     },
// //     {
// //       name: "TATAPOWER",
// //       qty: 5,
// //       avg: 104.2,
// //       price: 124.15,
// //       net: "+19.15%",
// //       day: "-0.24%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "TCS",
// //       qty: 1,
// //       avg: 3041.7,
// //       price: 3194.8,
// //       net: "+5.03%",
// //       day: "-0.25%",
// //       isLoss: true,
// //     },
// //     {
// //       name: "WIPRO",
// //       qty: 4,
// //       avg: 489.3,
// //       price: 577.75,
// //       net: "+18.08%",
// //       day: "+0.32%",
// //     },
// //   ];
// //   tempHoldings.forEach((item) => {
// //     let newHolding = new HoldingsModel({
// //       name: item.name,
// //       qty: item.qty,
// //       avg: item.avg,
// //       price: item.price,
// //       net: item.net,
// //       day: item.day,
// //     });
// //     newHolding.save();
// //   });
// //   res.send("done");
// // });
// // app.get("/addPositions", (req, res) => {
// //   let tempPositions = [
// //     {
// //       product: "CNC",
// //       name: "EVEREADY",
// //       qty: 2,
// //       avg: 316.27,
// //       price: 312.35,
// //       net: "+0.58%",
// //       day: "-1.24%",
// //       isLoss: true,
// //     },
// //     {
// //       product: "CNC",
// //       name: "JUBLFOOD",
// //       qty: 1,
// //       avg: 3124.75,
// //       price: 3082.65,
// //       net: "+10.04%",
// //       day: "-1.35%",
// //       isLoss: true,
// //     },
// //     {
// //       product: "CNC",
// //       name: "TCS",
// //       qty: 3,
// //       avg: 3000.00,
// //       price: 3200.00,
// //       net: "+6.67%",
// //       day: "+1.25%",
// //       isLoss: false, // Profit example
// //     },
// //     {
// //       product: "CNC",
// //       name: "INFY",
// //       qty: 5,
// //       avg: 1500.00,
// //       price: 1550.00,
// //       net: "+3.33%",
// //       day: "+0.75%",
// //       isLoss: false, // Profit example
// //     },
// //     {
// //       product: "CNC",
// //       name: "HDFCBANK",
// //       qty: 4,
// //       avg: 1400.00,
// //       price: 1450.00,
// //       net: "+3.57%",
// //       day: "+0.50%",
// //       isLoss: false, // Profit example
// //     },
// //   ];
// //   tempPositions.forEach((item) => {
// //     let newPositions = new PositionsModel({
// //       product: item.product,
// //       name: item.name,
// //       qty: item.qty,
// //       avg: item.avg,
// //       price: item.price,
// //       net: item.net,
// //       day: item.day,
// //       isLoss: item.isLoss,
// //     });
// //     newPositions.save();
// //   });
// //   res.send("done");
// // });

// app.use("/",authRoute);

// app.get("/allHoldings",async(req,res)=>{
//   let allHoldings = await HoldingsModel.find({});
//   res.json(allHoldings);
// });
// app.get("/allPositions",async(req,res)=>{
//   let allPositions = await PositionsModel.find({});
//   res.json(allPositions);
// });

// app.post('/newOrder' , async(req,res)=>{
//   let newOrder = new OrdersModel({
//    name: req.body.name,
//    qty: req.body.qty,
//    price: req.body.price,
//    mode: req.body.mode,
//   });
//   newOrder.save();
//   res.send("order saved");
// });
// app.get("/orders", async (req, res) => {
//   try {
//     const orders = await OrdersModel.find({});
//     res.json(orders);
//   } catch (err) {
//     console.error("Error fetching orders:", err);
//     res.status(500).json({ error: "Failed to fetch orders" });
//   }
// });
// app.delete("/orders/:id", async (req, res) => {
//   const orderId = req.params.id;
//   try {
//     await OrdersModel.findByIdAndDelete(orderId);

//     res.status(200).json({ message: "Order deleted successfully" });
//   } catch (err) {
//     console.error("Error deleting order:", err);
//     res.status(500).json({ error: "Failed to delete order" });
//   }
// }); 


// app.post("/addFunds", async (req, res) => {
//   const { userId, amount, paymentMethod } = req.body;
//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     return res.status(400).json({ error: "Invalid userId" });
//   }
//   if (!amount || amount <= 0) {
//     return res.status(400).json({ error: "Invalid amount" });
//   }
//   try {
//     console.log("UserModel:", UserModel); 
//     const user = await UserModel.findById(userId);
//     console.log("Fetched user:", user); 
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     user.balance += amount;
//     await user.save();
//     console.log(`Funds added: ${amount} via ${paymentMethod}`);
//     res.status(200).json({ message: "Funds added successfully", balance: user.balance });
//   } catch (error) {
//     console.error("Error adding funds:", error); 
//     res.status(500).json({ error: "Failed to add funds" });
//   }
// });

// app.post("/withdrawFunds", async (req, res) => {
//   const { userId, amount } = req.body;
//   console.log("Received userId:", userId);
//   console.log("Received amount:", amount);
//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     return res.status(400).json({ error: "Invalid userId" });
//   }
//   if (!amount || amount <= 0) {
//     return res.status(400).json({ error: "Invalid amount" });
//   }
//   try {
//     console.log("UserModel:", UserModel); // Debugging log
//     const user = await UserModel.findById(userId);
//     console.log("Fetched user:", user); // Debugging log
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     if (user.balance < amount) {
//       return res.status(400).json({ error: "Insufficient balance" });
//     }

//     user.balance -= amount;
//     await user.save();
//     console.log(`Funds withdrawn: ${amount}`);
//     res.status(200).json({ message: "Funds withdrawn successfully", balance: user.balance });
//   } catch (error) {
//     console.error("Error withdrawing funds:", error); // Log the error
//     res.status(500).json({ error: "Failed to withdraw funds" });
//   }
// });

// app.listen(port, () => {
//   console.log("App listening");
//   mongoose.connect(uri);
//   console.log("connection done");
// });
