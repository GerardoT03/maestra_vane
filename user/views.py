from django.shortcuts import render
from django.http import HttpResponse
from .models import User, Perfil

def register (request):
    usuario = User(name="Gerardo", email="gerardo_sad@example.com", address="México")
    usuario.save()

    perfil = Perfil(user = usuario)
    perfil.save()
    
    return HttpResponse("Usuario creado")