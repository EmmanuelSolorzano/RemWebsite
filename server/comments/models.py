from django.db import models
from datetime import datetime

# Create your models here.

class Comment(models.Model):
    nombre = models.CharField(max_length=50, blank=True)
    anonimo = models.BooleanField(default=False)
    fecha_creacion = models.DateField(auto_now_add=True)
    hora_creacion = models.TimeField(default=datetime.now().strftime('%H:%M'))
    descripcion = models.TextField(max_length=100)

    def save(self, *args, **kwargs):
        try:
            if self.anonimo:
                self.nombre = "Usuario Anónimo"
            print('Success')
        except:
            print('Failed')
        super().save(*args, **kwargs)