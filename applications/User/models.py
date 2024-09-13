from django.db import models

# Create your models here.
class User (models.Model):
    name_complete = models.CharField(max_length=80, blank=False, null=False)
    email = models.EmailField(blank=False, null=False)
    address = models.CharField(blank=False, null=False)
    phone_number= models.CharField(blank=False, null=False)

    #Selecciona si es  designer o customer
    is_designer = models.BooleanField(default=False) 
    is_costumer = models.BooleanField(default=False)

    def __str__(self):
        return self.name_complete
    
class Designer(User):
    biografia = models.TextField(null=False)
    social_media = models.URLField(max_length=200, blank=True)
    portfolio = models.URLField(max_length=200, blank=True)
    specialty = models.CharField(max_length=200, blank=True)
    date_of_creation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Designer:{self.name_complete}"

class Costumer (User):
    def __str__(self):
        return f"Costumer: {self.name_complete}"