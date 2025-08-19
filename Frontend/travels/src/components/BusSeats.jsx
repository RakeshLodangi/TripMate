import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./BusSeats.css";

const BusSeats = ({ token }) => {
  const [bus, setBus] = useState(null);
  const [seats, setSeats] = useState([]);

  const { busId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}buses/${busId}/`
        );

        setBus(response.data);
        setSeats(response.data.seats || []);
      } catch (error) {
        console.error("Error fetching bus details:", error);
      }
    };
    fetchBusDetails();
  }, [busId]);

  const handleSeatBooking = async (seatId) => {
    if (!token) {
      alert("You need to be logged in to book a seat.");
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}booking/`,
        { seat_id: seatId },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      console.log("Seat booked successfully:", response.data);
      alert("Seat booked successfully!");
      setSeats((prevSeats) =>
        prevSeats.map((seat) =>
          seat.id === seatId ? { ...seat, is_booked: true } : seat
        )
      );
    } catch (error) {
      console.error("Error booking seat:", error);
      alert(
        `Failed to book seat: ${
          error.response ? error.response.data : "Unknown error"
        }`
      );
    }
  };

  return (
    <div className="busseats-container">
      {bus && (
        <div className="bus-details">
          <h2>{bus.bus_name}</h2>
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
            <strong>Start:</strong> {bus.start_time}
          </p>
          <p>
            <strong>Reach:</strong> {bus.reach_time}
          </p>
        </div>
      )}

      <h3 className="seat-title">Select Your Seat</h3>
      <div className="seat-grid">
        {seats.map((seat) => (
          <button
            key={seat.id}
            className={`seat-btn ${seat.is_booked ? "booked" : "available"}`}
            onClick={() => handleSeatBooking(seat.id)}
            disabled={seat.is_booked}
          >
            {seat.seat_number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BusSeats;
