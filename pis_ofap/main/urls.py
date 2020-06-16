from rest_framework import routers
from .views import *


router = routers.DefaultRouter()

router.register('employees', EmployeesViewSet)
router.register('requests', RequestsViewSet)
router.register('repositories', RepositoriesViewSet)
router.register('agreements', AgreementsViewSet)

urlpatterns = router.urls