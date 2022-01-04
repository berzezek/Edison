from rest_framework.fields import CurrentUserDefault
from ..models import UserNumber, Psychic, Statistic
from rest_framework.serializers import ModelSerializer
import random

class UserNumberSerializer(ModelSerializer):
    class Meta:
        model = UserNumber
        fields = '__all__'


class PsychicSerializer(ModelSerializer):
    class Meta:
        model = Psychic
        fields = '__all__'


class StatisticSerializer(ModelSerializer):

    user_number = UserNumberSerializer()
    psychic = PsychicSerializer()
    class Meta:
        model = Statistic
        fields = '__all__'

