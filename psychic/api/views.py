import random
from rest_framework import permissions, serializers, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import UserNumberSerializer, PsychicSerializer, StatisticSerializer
from rest_framework.viewsets import ModelViewSet
from ..models import Statistic, UserNumber, Psychic


class UserNumberViewSet(ModelViewSet):
    queryset = UserNumber.objects.all()
    serializer_class = UserNumberSerializer

    @action(detail=True, methods=['post'])
    def user_post_number(self, request, pk=None):
        

        return Response()

class PsychicViewSet(ModelViewSet):
    queryset = Psychic.objects.all()
    serializer_class = PsychicSerializer
    permission_classes = [permissions.IsAuthenticated]


class StatisticViewSet(ModelViewSet):
    queryset = Statistic.objects.all()
    serializer_class = StatisticSerializer
    permission_classes = [permissions.AllowAny]


class IsOwnerFilterBackend(filters.BaseFilterBackend):
    """
    Filter that only allows users to see their own objects.
    """
    def filter_queryset(self, request, queryset, view):
        print(request.user.id)
        return queryset.filter(user_number_id=request.user.id)


class UserStatisticViewSet(ModelViewSet):
    queryset = Statistic.objects.all()
    serializer_class = StatisticSerializer
    filter_backends = [IsOwnerFilterBackend]

        