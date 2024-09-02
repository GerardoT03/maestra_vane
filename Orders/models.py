from django.db import models
from datetime import date

class Pedido (models.Model):
    fecha = models.DateField(default = date)
    total = models.FloatField(null=False)

    def __str__(self):
        return self.fecha

