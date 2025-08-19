import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserBookings.css";

const UserBookings = ({ token, userId }) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!token || !userId) {
        return;
      }
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}user/${userId}/bookings/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        console.log("Bookings fetched:", response.data);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, [token, userId]);

  if (!token || !userId) {
    return (
      <div className="bookings-message">
        Please log in to view your bookings.
      </div>
    );
  }

  return (
    <div className="bookings-container">
      <h2 className="bookings-title">My Bookings</h2>
      {bookings.length === 0 ? (
        <p className="no-bookings">No bookings found.</p>
      ) : (
        bookings.map((item) => (
          <div key={item.id} className="booking-card">
            <h3 className="booking-username">Booked by: {item.user}</h3>
            <p>
              <strong>Bus:</strong> {item.bus}
            </p>
            <p>
              <strong>Seat:</strong> {item.seat}
            </p>
            <p>
              <strong>Date:</strong> {item.booking_date}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default UserBookings;
