from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    number = models.IntegerField()


class Psychic(models.Model):
    title = models.CharField(max_length=255)
    credibility = models.IntegerField(default=0)
    discredibility = models.IntegerField(default=0)


