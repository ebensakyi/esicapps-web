#!/bin/bash

# Function to handle errors
handle_error() {
  echo "==================================================="
  echo "💥 ERROR: Step $1 failed!"
  echo "Exiting script."
  echo "==================================================="
  exit 1
}

# STEP 1: Clean up old files from the target directory
echo "==================================================="
echo "🚮 STEP 1: Cleaning up old files"
echo "==================================================="
if ! sudo rm -rf /var/www/html/dashboard.esicapps.org/*; then
  handle_error "Cleaning up old files"
fi
echo "✅ STEP 1 Complete: Old files cleaned up"

# STEP 2: Clone the latest code from GitHub
echo "==================================================="
echo "🌐 STEP 2: Cloning the project from GitHub"
echo "==================================================="
cd ~
if ! sudo rm -rf esicapps-web; then
  handle_error "Removing old clone"
fi
if ! git clone https://github.com/ebensakyi/esicapps-web.git; then
  handle_error "Cloning repository"
fi
cd esicapps-web
echo "✅ STEP 2 Complete: Project cloned successfully"

# STEP 3: Copy files to the target directory
echo "==================================================="
echo "📂 STEP 3: Copying files to /var/www/html/dashboard.esicapps.org"
echo "==================================================="
if ! sudo cp -r ./* /var/www/html/dashboard.esicapps.org; then
  handle_error "Copying files to the target directory"
fi
echo "✅ STEP 3 Complete: Files copied successfully"

# STEP 4: Set proper permissions for the files and directories
echo "==================================================="
echo "🔒 STEP 4: Setting file and directory permissions"
echo "==================================================="
if ! sudo find /var/www/html/dashboard.esicapps.org -type d -exec chmod 755 {} \;; then
  handle_error "Setting directory permissions"
fi
if ! sudo find /var/www/html/dashboard.esicapps.org -type f -exec chmod 644 {} \;; then
  handle_error "Setting file permissions"
fi
echo "✅ STEP 4 Complete: Permissions set successfully"

# STEP 5: Install dependencies
echo "==================================================="
echo "📦 STEP 5: Installing dependencies"
echo "==================================================="
if ! npm i --force; then
  handle_error "Installing npm dependencies"
fi
echo "✅ STEP 5 Complete: Dependencies installed"

# Verify node_modules folder
echo "==================================================="
echo "🔍 Verifying node_modules folder"
echo "==================================================="
if [ ! -d "node_modules" ]; then
  echo "💥 ERROR: node_modules folder not found after installing dependencies"
  handle_error "Verifying node_modules folder"
fi
echo "✅ node_modules folder is present"

# STEP 6: Generate Prisma Client
echo "==================================================="
echo "🛠️ STEP 6: Generating Prisma Client"
echo "==================================================="
if ! npx prisma generate; then
  handle_error "Generating Prisma Client"
fi
echo "✅ STEP 6 Complete: Prisma Client generated"

# STEP 7: Build the project
echo "==================================================="
echo "🏗️ STEP 7: Building the project"
echo "==================================================="
if ! npm run build; then
  handle_error "Building the project"
fi
echo "✅ STEP 7 Complete: Project built successfully"

# STEP 8: Set directory permissions for web server access
echo "==================================================="
echo "🔧 STEP 8: Setting permissions for web server access"
echo "==================================================="
if ! sudo chmod -R 777 /var/www/html/dashboard.esicapps.org; then
  handle_error "Setting web server permissions"
fi
echo "✅ STEP 8 Complete: Permissions for web server set"

# STEP 9: Stop any process occupying port 3000
echo "==================================================="
echo "🛑 STEP 9: Stopping any process using port 3000"
echo "==================================================="
if ! sudo kill -9 $(sudo lsof -t -i:3000) > /dev/null 2>&1; then
  echo "No process found using port 3000, continuing..."
fi
echo "✅ STEP 9 Complete: Port 3000 cleared"

# STEP 10: Stop and delete existing PM2 process if it exists
echo "==================================================="
echo "♻️ STEP 10: Stopping and deleting old PM2 process"
echo "==================================================="
if ! pm2 stop dashboard.esicapps.org > /dev/null 2>&1; then
  echo "No running PM2 process found, continuing..."
fi
if ! pm2 delete dashboard.esicapps.org > /dev/null 2>&1; then
  echo "No PM2 process to delete, continuing..."
fi
echo "✅ STEP 10 Complete: Old PM2 process stopped and deleted"

# STEP 11: Start the new PM2 process
echo "==================================================="
echo "🚀 STEP 11: Starting the project with PM2"
echo "==================================================="
if ! pm2 start npm --name dashboard.esicapps.org -- run start; then
  handle_error "Starting the project with PM2"
fi
echo "✅ STEP 11 Complete: Project started successfully with PM2"

# Done!
echo "==================================================="
echo "🎉 Deployment complete! All steps executed successfully."
echo "==================================================="
