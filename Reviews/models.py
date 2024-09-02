from django.db import models

class Comentario (models.Model):
    comment = models.TextField()