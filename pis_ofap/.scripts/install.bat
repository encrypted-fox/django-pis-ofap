@echo off

cd ../
py -m pip install --user virtualenv
py -m venv env
call ".\/env/scripts/Activate.bat"

call npm install 

call npm install webpack

call webpack --mode production ./frontend/src/index.js --output ./frontend/static/frontend/main.js

call npm run build

call py -m pip install -r requirements.txt 

call py manage.py collectstatic 

call py manage.py migrate

pause
