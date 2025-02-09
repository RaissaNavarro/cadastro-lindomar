from django.db import models

class Professor(models.Model):
    ni = models.CharField(max_length=10, unique=True)  # ni é numero de identificação do prof
    nome = models.CharField(max_length=255) 
    email = models.EmailField(unique=True)  # email do prof
    cargo = models.CharField(max_length=255) 
    cel = models.CharField(max_length=15)  #celular do prof

    def __str__(self):
        return self.nome
