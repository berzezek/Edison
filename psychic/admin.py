from django.contrib import admin

from .models import Psychic, Statistic, UserNumber

# Register your models here.
admin.site.register(Psychic)
admin.site.register(Statistic)
admin.site.register(UserNumber)