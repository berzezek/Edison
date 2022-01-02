from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter
from .views import UserProfileViewSet, PsychicViewSet



router = SimpleRouter()
router.register('userprofile', UserProfileViewSet, basename='userprofile')
router.register('psychic', PsychicViewSet, basename='psychic')

urlpatterns = []

urlpatterns += router.urls