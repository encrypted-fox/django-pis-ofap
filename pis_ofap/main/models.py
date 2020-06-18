from django.db import models

# Create your models here.

class Employees(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, null=False)
    login = models.CharField(max_length=100, null=False)
    access_level = models.IntegerField(null=False)
    password = models.TextField(null=False)

    class Meta: 
        db_table = 'employees'


class Requests(models.Model):
    id = models.AutoField(primary_key=True)
    manager_id = models.ForeignKey(Employees, on_delete=models.CASCADE, null=False)
    inventory_number = models.CharField(max_length=100, null=False)
    name = models.CharField(max_length=100, null=False)
    email = models.EmailField(max_length=100, null=False)
    volume = models.CharField(max_length=20, null=False)
    os_type = models.CharField(max_length=100, null=False)
    used_programs = models.CharField(max_length=100, null=False)
    system_requirements = models.TextField(null=False)
    program_description = models.TextField(null=False)
    usage_description = models.TextField(null=False)
    date = models.DateField(null=False)
    status = models.CharField(max_length=20, null=False)

    class Meta: 
        db_table = 'requests'
    

class Agreements(models.Model):
    id = models.AutoField(primary_key=True)
    manager_id = models.ForeignKey(Employees, related_name='manager_id', on_delete=models.CASCADE, null=False)
    lawyer_id = models.ForeignKey(Employees, related_name='lawyer_id', on_delete=models.CASCADE, null=False)
    request_id = models.ForeignKey(Requests, related_name='request_id', on_delete=models.CASCADE, null=False)
    status = models.CharField(max_length=20, null=False)

    class Meta:
        db_table = 'agreements'

class Repositories(models.Model):
    id = models.AutoField(primary_key=True)
    inventory_number = models.CharField(max_length=100, null=False)
    name = models.CharField(max_length=100, null=False)
    email = models.EmailField(max_length=100, null=False)
    volume = models.CharField(max_length=20, null=False)
    os_type = models.CharField(max_length=100, null=False)
    used_programs = models.CharField(max_length=100, null=False)
    system_requirements = models.TextField(null=False)
    program_description = models.TextField(null=False)
    usage_description = models.TextField(null=False)
    date = models.DateField(null=False)
    agreement_id = models.ForeignKey(Agreements, on_delete=models.CASCADE, null=False)

    class Meta: 
        db_table = 'repositories'

