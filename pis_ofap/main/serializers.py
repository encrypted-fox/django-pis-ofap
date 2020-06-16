from rest_framework import serializers
from .models import *


class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = '__all__'


class RequestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requests
        fields = '__all__'


class RepositoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Repositories
        fields = '__all__'


class AgreementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agreements
        fields = '__all__'