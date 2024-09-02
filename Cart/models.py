from django.db import models

class Carrito (models.Model):
    productos = models.IntegerField(default=0)


class ItemCarrito (models.Model):
    Item_carrito = models.OneToOneField(Carrito, on_delete= models.CASCADE, primary_key=True)
    Items = models.IntegerField(default=0)