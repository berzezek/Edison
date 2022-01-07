from rest_framework.routers import SimpleRouter
from .views import UserNumberViewSet, PsychicViewSet, PsychicNumberViewSet, UserNumberCreateViewSet


router = SimpleRouter()
router.register('usernumber', UserNumberViewSet, basename='usernumber')
router.register('usernumbercreate', UserNumberCreateViewSet, basename='usernumbercreate')
router.register('psychic', PsychicViewSet, basename='psychic')
router.register('psychicnumber', PsychicNumberViewSet, basename='psychicnumber')

urlpatterns = []

urlpatterns += router.urls