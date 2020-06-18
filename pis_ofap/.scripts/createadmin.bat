@echo off

cd ../

call py manage.py createsuperuser

call start http://127.0.0.1:8000/admin/

pause

call start http://127.0.0.1:8000/o/applications/register/

pause