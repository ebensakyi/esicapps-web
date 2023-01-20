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


sudo rm -r  /var/www/html/dashboard.esicapps.org/* && cd ~/ && sudo rm -r  esicapps-web && git clone https://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@github.com/ebensakyi/esicapps-web.git && cd ~/esicapps-web  && sudo cp -r * /var/www/html/dashboard.esicapps.org && cd  /var/www/html/dashboard.esicapps.org && sudo npm i && sudo npx prisma generate && sudo npm run build && sudo kill -9 $(sudo lsof -t -i:3000) && pm2 stop dashboard.esicapps.org && pm2 delete dashboard.esicapps.org && pm2 start npm --name dashboard.esicapps.org -- run start




work on all publishing with  residential as template

N@Fnso)A.N(T*cxod6nu)k3-)s8mRfDi


1. Work on dashboard
2. save  reinspection