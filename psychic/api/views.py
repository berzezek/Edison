from rest_framework.permissions import AllowAny
from rest_framework.generics import ListCreateAPIView
from .serializers import PsychicNumberSerializer, UserNumberSerializer, PsychicSerializer, UserNumberCreateSerializer, PsychicNumberCreateSerializer
from rest_framework.viewsets import ModelViewSet
from ..models import Psychic, UserNumber, PsychicNumber
from .permissions import IsOwner



class UserNumberViewSet(ModelViewSet):
    
    serializer_class = UserNumberSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        return UserNumber.objects.filter(user=self.request.user.id)


class UserNumberCreateViewSet(ModelViewSet):
    
    serializer_class = UserNumberCreateSerializer
    # permission_classes = (permissions.IsAuthenticated, IsOwner)

    def get_queryset(self):
        return UserNumber.objects.filter(user=self.request.user.id)


class PsychicViewSet(ModelViewSet):
    queryset = Psychic.objects.all()
    serializer_class = PsychicSerializer


class PsychicNumberViewSet(ModelViewSet):
    # queryset = PsychicNumber.objects.all()
    serializer_class = PsychicNumberSerializer

    # def get_queryset(self):
    #     return self.queryset.filter(user_number__user=self.request.user.id).filter(user_number__number_user=self.kwargs['id'])

    def get_queryset(self):

        queryset = PsychicNumber.objects.all().filter(user_number__user=self.request.user.id)
        username = self.request.query_params.get('num')
        if username is not None:
            queryset = queryset.filter(user_number__number_user=username)
        return queryset

class PsychicNumberCreateViewSet(ModelViewSet):
    queryset = PsychicNumber.objects.all()
    serializer_class = PsychicNumberCreateSerializer