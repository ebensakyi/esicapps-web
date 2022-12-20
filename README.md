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