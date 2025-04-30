import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3002/signup", formData);
      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signdiv mt-3">
      <div>
        <img style={{height:"400px", width:"700px"}}  src="./media/images/signupimage.jpg"></img>
      </div>
      <div className="signup-container mt-5">
      <h2 style={{color:"blueviolet"}}>Signup</h2>
      <form onSubmit={handleSubmit}>
       <div>
       <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
       </div>
        <button type="submit">Signup</button>
      </form>
      <br>
      </br>
      <p >Already have account? <a  style={{textDecoration:"none",color:"blue"}} href="/login">Login</a></p>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Signup;


