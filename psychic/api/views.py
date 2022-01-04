import random
from rest_framework import permissions, serializers
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import UserProfileSerializer, PsychicSerializer, StatisticSerializer
from rest_framework.viewsets import ModelViewSet
from ..models import Statistic, UserNumber, Psychic


class UserNumberViewSet(ModelViewSet):
    queryset = UserNumber.objects.all()
    serializer_class = UserProfileSerializer

    @action(detail=True, methods=['post'])
    def user_post_number(self, request, pk=None):
        

        return Response()

class PsychicViewSet(ModelViewSet):
    queryset = Psychic.objects.all()
    serializer_class = PsychicSerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class StatisticViewSet(ModelViewSet):
    queryset = Statistic.objects.all()
    serializer_class = StatisticSerializer

    @action(detail=True, methods=['post'])
    def psychic_start_working(self, request, pk=None):
        for i in Psychic.objects.filter():
            data = Statistic(
                psychic = i,
                psychic_number = random.randint(1, 99),
                user_profile = request.user,
            )

        return Response()


        