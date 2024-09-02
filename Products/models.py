from django.db import models

class Producto (models.Model):
    name_product = models.CharField(max_length=150)
    description = models.TextField()
    price = models.FloatField(null=False)

    def __str__(self):
        return self.name_product

class Category (models.Model):
    categoria = models.CharField(max_length=10)
    
    def __str__(self):
        return self.categoria
    
class Inventory (models.Model):
    cantidad = models.IntegerField(default=0)

    def __str__(self):
        return self.cantidad