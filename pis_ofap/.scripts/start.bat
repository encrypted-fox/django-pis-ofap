@echo off

cd ../

call npm run build

call py manage.py runserver

call start 'http://127.0.0.1:8000/'

pause