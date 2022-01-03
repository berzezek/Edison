from ..models import UserNumber, Psychic, Statistic
from rest_framework.serializers import ModelSerializer

class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = UserNumber
        fields = '__all__'


class PsychicSerializer(ModelSerializer):
    class Meta:
        model = Psychic
        fields = '__all__'


class StatisticSerializer(ModelSerializer):
    class Meta:
        model = Statistic
        fields = '__all__'

