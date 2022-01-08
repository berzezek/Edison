from django.urls import path, include
from .views import index, detail


urlpatterns = [
    path('', index),
    path('usernumber/', index),
    path('signin/', index),
    path('psychic/', index),
    path('psychicCredibility/', index),
    path('usernumber/<int:id>/', detail),
    path('psychicnumber/<int:id>/', detail),
]
