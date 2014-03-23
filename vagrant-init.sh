#!/usr/bin/env bash
cd /vagrant

# Update apt repositories
echo "Updating apt repositories"
apt-get update

# git
echo "Installing git"
sudo apt-get -y install git git-man git-doc

# node.js
echo "Installing Node.js"
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
sudo apt-get -y install python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get -y install nodejs

# nginx
echo "Installing nginx"
sudo apt-get -y install nginx
echo "Coping nginx domain config"
cp nginx.conf /etc/nginx/sites-enabled/localhost
echo "Adding nginx service to the system startup"
sudo /usr/sbin/update-rc.d -f nginx defaults

# gulp.js and modules
sudo npm install -g gulp gulp-util
