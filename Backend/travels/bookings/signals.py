
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Bus, Seat

@receiver(post_save, sender=Bus)
def create_seats(sender, instance, created, **kwargs):
    if created:
        for seat_number in range(1, instance.total_seats + 1):
            Seat.objects.create(bus=instance, seat_number= f"S{seat_number}")