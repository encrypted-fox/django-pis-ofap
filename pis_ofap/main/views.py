from .models import *
from rest_framework import viewsets, permissions
from .serializers import *


class EmployeesViewSet(viewsets.ModelViewSet):
    queryset = Employees.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmployeesSerializer


class RequestsViewSet(viewsets.ModelViewSet):
    queryset = Requests.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RequestsSerializer


class RepositoriesViewSet(viewsets.ModelViewSet):
    queryset = Repositories.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RepositoriesSerializer


class AgreementsViewSet(viewsets.ModelViewSet):
    queryset = Agreements.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AgreementsSerializer