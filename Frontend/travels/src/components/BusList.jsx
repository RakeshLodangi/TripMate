import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./BusList.css";

const BusList = () => {
  const [buses, setBuses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}buses/`
        );

        setBuses(response.data);
      } catch (error) {
        console.error("Error fetching buses:", error);
      }
    };
    fetchBuses();
  }, []);

  const handleViewSeats = (busId) => {
    navigate(`/bus/${busId}`);
  };

  return (
    <div className="buslist-container">
      <h2 className="buslist-title">Available Buses</h2>
      <div className="buslist-grid">
        {buses.length > 0 ? (
          buses.map((bus) => (
            <div key={bus.id} className="bus-card">
              <h3 className="bus-name">{bus.bus_name}</h3>
              <p>
                <strong>Bus Number:</strong> {bus.bus_number}
              </p>
              <p>
                <strong>From:</strong> {bus.origin}
              </p>
              <p>
                <strong>To:</strong> {bus.destination}
              </p>
              <p>
                <strong>Start Time:</strong> {bus.start_time}
              </p>
              <p>
                <strong>Reach Time:</strong> {bus.reach_time}
              </p>

              <button
                className="view-btn"
                onClick={() => handleViewSeats(bus.id)}
              >
                View Seats
              </button>
            </div>
          ))
        ) : (
          <p className="no-bus">No buses available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default BusList;
