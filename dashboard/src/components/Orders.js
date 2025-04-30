import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]); // State to store orders
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Fetch orders from the backend
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3002/orders");
        setOrders(response.data); 
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchOrders();
  }, []);

  const handleSell = async (orderId) => {
    try {
      // Delete the order from the backend
      await axios.delete(`http://localhost:3002/orders/${orderId}`);

      // Update the frontend state to remove the order
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
    } catch (err) {
      console.error("Error deleting order:", err);
    }
  };

  // const resetOrders = () => {
  //   setOrders([]); // Clear the orders
  // };
  return (
    <>
      <div className="orders">
      {/* <button onClick={resetOrders} className="reset-button">
          Reset Orders
        </button> */}
        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <table className="orders-table">
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            {orders.map((order) => {
              return (
                <tr key={order._id}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>₹{order.price}</td>
                  <td>{order.mode}</td>
                  <td>
                  <button
                    className="sell-btn"
                    onClick={() => handleSell(order._id)}
                  >
                    Sell
                  </button>
                </td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    </>
  );
};

export default Orders;
