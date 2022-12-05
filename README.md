1. login
2. Add user logs to all tables


cd ~/
git clone https://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@github.com/ebensakyi/esicapps-web.git
cd ~/esicapps-web
sudo mv * /var/www/html/
prisma generate
sudo npm build
pm2 delete esicapps
pm2 start npm --name esicapps -- run start