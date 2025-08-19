
from django.urls import path

from .views import (
    RegisterView,
    LoginView,
    BusListCreateView,
    BusDetailView,
    BookingView,
    UserBookingsView
)

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('buses/', BusListCreateView.as_view(), name='buslist'),
    path('buses/<int:pk>/', BusDetailView.as_view(), name='busdetail'),
    path('booking/', BookingView.as_view(), name='booking'),
    path('user/<int:user_id>/bookings/', UserBookingsView.as_view(), name='user-bookings'),
]