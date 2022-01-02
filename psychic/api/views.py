from rest_framework import viewsets
from .serializers import UserProfileSerializer, PsychicSerializer
from rest_framework.viewsets import ModelViewSet
from ..models import UserProfile, Psychic


class UserProfileViewSet(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer


class PsychicViewSet(ModelViewSet):
    queryset = Psychic.objects.all()
    serializer_class = PsychicSerializer