from django.db import models

# This file describles how the fields should be displayed in my database


class Commodity(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    time = models.DateTimeField(auto_now_add=True)
    unit = models.CharField(max_length=60)

    def __str__(self):
        return self.name
