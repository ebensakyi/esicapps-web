Work on rating interpretation on web. Ceil all rating values and use mobile app interpretations on web.


1. Update SanitationReporter Table on the Live DB with sanitationReportUserId,assignedTo,assignedBy and add foreign key constraints




sudo rm -f -r  /var/www/html/dashboard.esicapps.org/* && cd ~/ && sudo rm -f -r  esicapps-web && git clone https://github.com/ebensakyi/esicapps-web.git && cd ~/esicapps-web  && sudo cp -r * /var/www/html/dashboard.esicapps.org && cd  /var/www/html/dashboard.esicapps.org 

&& sudo chmod 777 * && npm install prisma -g && sudo npm i --f 

&& sudo npx prisma generate && sudo npm run build && sudo chmod -R 777 /var/www/html/dashboard.esicapps.org && sudo kill -9 $(sudo lsof -t -i:3000) && pm2 stop dashboard.esicapps.org && pm2 delete dashboard.esicapps.org && pm2 start npm --name dashboard.esicapps.org -- run start