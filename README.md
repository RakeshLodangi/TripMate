# TripMate - Bus Ticket Booking App

TripMate is a full-stack bus ticket booking application built with **Django** (backend) and **React** (frontend). Users can register, login, view available buses, select seats, and manage their bookings.

---

## 🛠 Tech Stack

- **Backend:** Django, Django REST Framework, Django Token Authentication
- **Frontend:** React, React Router, Axios
- **Database:** SQLite (default for development, can be replaced with PostgreSQL)
- **Styling:** CSS
- **Environment Variables:** `.env` (backend) & `.env` (frontend)

---

## 🚀 Features

- User registration and login with token-based authentication
- View list of available buses with details (bus number, origin, destination, timings)
- Auto-generation of seats when a bus is added
- Book a seat with real-time availability check
- View all bookings for a logged-in user
- Responsive UI built with React

---

## 📁 Folder Structure

### Backend (Django)

bookings/
├─ migrations/
├─ init.py
├─ admin.py
├─ apps.py
├─ models.py
├─ serializers.py
├─ signals.py
├─ urls.py
├─ views.py
manage.py
.env

### Frontend (React)

src/
├─ components/
│ ├─ BusList.jsx
│ ├─ BusSeats.jsx
│ ├─ UserBookings.jsx
│ ├─ Register.jsx
│ ├─ Login.jsx
│ ├─ Wrapper.jsx
├─ App.jsx
├─ main.jsx
├─ index.css
.env

---

## ⚙ Installation

### Backend

1. Create virtual environment and activate:

```bash
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

2. Install dependencies:
pip install -r requirements.txt

3. Apply migrations:
python manage.py migrate

4. Create superuser(optional):
python manage.py createsuperuser

5. Run server
python manage.py runserver


### Frontend

1. Install dependencies:
npm install

2. Create .env with API URL:
VITE_API_URL=http://localhost:8000/api/

3. Start development server:
npm run dev


🔐 Authentication

Uses Django Token Authentication

Protected endpoints:

/booking/ → Book a seat

/user/<user_id>/bookings/ → View user bookings

Frontend stores token in localStorage


📌 Usage

Register a new user

Login to receive a token

View available buses

Click a bus to see seats

Book a seat (logged-in users only)

View your bookings on My Bookings


⚡ Improvements / Future Work

Add seat selection visualization with different layouts

Replace SQLite with PostgreSQL for production

Add payment integration

Add email notifications for booking confirmations

Implement admin panel for bus management


📜 License

This project is open-source and free to use.

```
