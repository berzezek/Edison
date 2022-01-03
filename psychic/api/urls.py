from rest_framework.routers import SimpleRouter
from .views import UserProfileViewSet, PsychicViewSet, StatisticViewSet



router = SimpleRouter()
router.register('userprofile', UserProfileViewSet, basename='userprofile')
router.register('psychic', PsychicViewSet, basename='psychic')
router.register('statistic', StatisticViewSet, basename='statistic')

urlpatterns = []

urlpatterns += router.urls