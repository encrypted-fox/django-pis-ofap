@echo off

cd ../

call npm run build

call py manage.py runserver

pause