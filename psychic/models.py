from django.db import models
from django.contrib.auth.models import User

class UserNumber(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    number_user = models.IntegerField(unique=False)

class Psychic(models.Model):
    title = models.CharField(max_length=255)
    credibility = models.IntegerField(default=0)
    attempt = models.IntegerField(default=0)


class PsychicNumber(models.Model):
    user_number = models.ForeignKey(UserNumber, on_delete=models.CASCADE)
    psychic = models.ForeignKey(Psychic, on_delete=models.CASCADE)
    number_psychic = models.IntegerField()
