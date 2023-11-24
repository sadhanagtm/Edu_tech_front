echo "Jump to app folder"
cd /home/ubuntu/sikkai/frontend/student

echo "Install app dependencies"
npm install

echo "Build app dependencies"
npm run build

echo "start the application"
pm2 restart sikkai-student-frontend

echo "Sikkai frontend instructor deployment completed"
