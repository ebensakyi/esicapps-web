1. login
2. Add user logs to all tables


cd ~/
git clone https://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@github.com/ebensakyi/esicapps-web.git
cd ~/esicapps-web
sudo cp * /var/www/html/dashboard.esicapps.org
sudo npm i
npx prisma generate
sudo npm run build
pm2 delete dashboard.esicapps.org
pm2 start npm --name dashboard.esicapps.org -- run start




1. Check for null


Kofi@2318.com




sudo rm -f -r  /var/www/html/dashboard.esicapps.org/* && cd ~/ && sudo rm -f -r  esicapps-web && git clone https://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@github.com/ebensakyi/esicapps-web.git && cd ~/esicapps-web  && sudo cp -r * /var/www/html/dashboard.esicapps.org && cd  /var/www/html/dashboard.esicapps.org  && sudo chmod 777 -R * && sudo npm i --f  && sudo npx prisma generate && sudo npm run build && sudo chmod 777 -R * && sudo kill -9 $(sudo lsof -t -i:3000) && pm2 stop dashboard.esicapps.org && pm2 delete dashboard.esicapps.org && pm2 start npm --name dashboard.esicapps.org -- run start



work on all publishing with  residential as template

pm2 stop esicapps.org && pm2 delete esicapps.org
ln -s /etc/nginx/sites-available/example.conf /etc/nginx/sites-enabled/



sudo rm -f -r  /var/www/html/esicapps.org/* && cd ~/ && sudo rm -f -r  esicapps.org && git clone https://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@github.com/ebensakyi/esicapps.org.git && cd ~/esicapps.org  && sudo cp -r * /var/www/html/esicapps.org 

1. Work on dashboard
2. save  reinspection


 
update "District"
   set name = TRIM(name);
   
   update "Community"
   set name = upper(name);



   1. woork on reset password
   2. enable sms foor accoount creation
   3. paginate, search and filter users
   4. paginate, search and filter user loogs
   5. edit dataview



   ////////////////////////////////////////////////////////////////
   1. Check added users district and regions based on login user level
   2. work on user export
   3. work on data filter
   4. check paths  and block users if page is not accessible

//// ***
////////////////////////

1. work on followup inspection with images
2. work on data transfer
3. work on app website



1. log all activies
2. work on map
3. work on notifications





