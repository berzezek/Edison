from rest_framework.routers import SimpleRouter
from .views import UserNumberViewSet, PsychicViewSet, StatisticViewSet, UserStatisticViewSet



router = SimpleRouter()
router.register('usernumber', UserNumberViewSet, basename='usernumber')
router.register('psychic', PsychicViewSet, basename='psychic')
router.register('psychicstatistic', StatisticViewSet, basename='psychicstatistic')
router.register('userstatistic', UserStatisticViewSet, basename='userstatistic')

urlpatterns = []

urlpatterns += router.urls