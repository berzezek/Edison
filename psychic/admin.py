from django.contrib import admin

from .models import Psychic, UserNumber, PsychicNumber

# Register your models here.
admin.site.register(Psychic)
admin.site.register(UserNumber)
admin.site.register(PsychicNumber)