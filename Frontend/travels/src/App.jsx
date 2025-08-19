import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import BusList from "./components/BusList";
import BusSeats from "./components/BusSeats";
import UserBookings from "./components/UserBookings";
import Wrapper from "./components/Wrapper.jsx";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  const handleLogin = (token, userId) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    setToken(token);
    setUserId(userId);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setToken(null);
    setUserId(null);
  };

  return (
    <div>
      <Wrapper handleLogout={handleLogout} token={token}>
        <Routes>
          <Route path="/" element={<BusList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/bus/:busId" element={<BusSeats token={token} />} />
          <Route
            path="/my-bookings"
            element={<UserBookings token={token} userId={userId} />}
          />
        </Routes>
      </Wrapper>
    </div>
  );
};

export default App;
