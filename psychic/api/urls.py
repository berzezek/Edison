from rest_framework.routers import SimpleRouter
from .views import UserNumberViewSet, PsychicViewSet, StatisticViewSet



router = SimpleRouter()
router.register('usernumber', UserNumberViewSet, basename='usernumber')
router.register('psychic', PsychicViewSet, basename='psychic')
router.register('statistic', StatisticViewSet, basename='statistic')
router.register('userstatistic', StatisticViewSet, basename='userstatistic')

urlpatterns = []

urlpatterns += router.urls