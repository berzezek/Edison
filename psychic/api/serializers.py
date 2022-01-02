from django.db import models
from django.db.models import fields
from ..models import UserProfile, Psychic
from rest_framework.serializers import ModelSerializer


class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'


class PsychicSerializer(ModelSerializer):
    class Meta:
        model = Psychic
        fields = '__all__'


