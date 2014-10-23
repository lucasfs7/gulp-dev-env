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
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get -y install nodejs
sudo apt-get install build-essential

# nginx
echo "Installing nginx"
sudo apt-get -y install nginx
echo "Coping nginx domain config"
cp nginx.conf /etc/nginx/sites-enabled/localhost
echo "Adding nginx service to the system startup"
sudo /usr/sbin/update-rc.d -f nginx defaults
