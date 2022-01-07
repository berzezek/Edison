from ..models import UserNumber, Psychic, PsychicNumber
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User

class UserSerialiser(ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

class UserNumberSerializer(ModelSerializer):
    user = UserSerialiser()
    class Meta:
        model = UserNumber
        fields = '__all__'

class UserNumberCreateSerializer(ModelSerializer):
    class Meta:
        model = UserNumber
        fields = '__all__'


class PsychicSerializer(ModelSerializer):
    class Meta:
        model = Psychic
        fields = '__all__'


class PsychicNumberSerializer(ModelSerializer):

    user_number = UserNumberSerializer()
    psychic = PsychicSerializer()
    class Meta:
        model = PsychicNumber
        fields = '__all__'


