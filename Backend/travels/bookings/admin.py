from django.contrib import admin

from .models import Bus, Seat, Booking

# Register your models here.
class BusAdmin(admin.ModelAdmin):
    list_display = ('bus_name', 'bus_number', 'origin', 'destination', 'start_time', 'reach_time', 'price')
    search_fields = ('bus_name', 'bus_number', 'origin', 'destination')

class SeatAdmin(admin.ModelAdmin):
    list_display = ('bus', 'seat_number', 'is_booked')
    search_fields = ('bus__bus_name', 'seat_number')

class BookingAdmin(admin.ModelAdmin):
    list_display = ('user', 'bus', 'seat', 'booking_date')

admin.site.register(Bus, BusAdmin)
admin.site.register(Seat, SeatAdmin)
admin.site.register(Booking, BookingAdmin)