from rest_framework import permissions
from .serializers import UserProfileSerializer, PsychicSerializer, StatisticSerializer
from rest_framework.viewsets import ModelViewSet
from ..models import Statistic, UserNumber, Psychic


class UserProfileViewSet(ModelViewSet):
    queryset = UserNumber.objects.all()
    serializer_class = UserProfileSerializer


class PsychicViewSet(ModelViewSet):
    queryset = Psychic.objects.all()
    serializer_class = PsychicSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class StatisticViewSet(ModelViewSet):
    queryset = Statistic.objects.all()
    serializer_class = StatisticSerializer