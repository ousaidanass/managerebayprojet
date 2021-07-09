from django.db import models

class Service(models.Model):
    title = models.TextField(max_length=100)
    image = models.ImageField(upload_to='images/')
    html_name = models.CharField(max_length=50)

    def __str__(self):
        return self.title