from django.db import models

class Recipe(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField()
    summary = models.CharField(max_length=255)
    ingredients = models.TextField()
