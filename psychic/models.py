from django.db import models
from django.contrib.auth.models import User
import random

class UserNumber(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    number = models.IntegerField()

class Psychic(models.Model):
    title = models.CharField(max_length=255)
    credibility = models.IntegerField(default=0)
    discredibility = models.IntegerField(default=0)


class Statistic(models.Model):

    psychic = models.ForeignKey(Psychic, on_delete=models.CASCADE)
    psychic_number = models.IntegerField(default=0)
    user_profile = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True) 
