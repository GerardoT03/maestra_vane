from django.db import models

class User (models.Model):
    name = models.CharField(max_length=55)
    email = models.EmailField(max_length=80)
    address = models.CharField(max_length=150)

    def __str__(self):
        return self.name

class Perfil(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    aditional_address = models.CharField(max_length=150, default="México")
    
    def __str__(self):
        return self.user.name
