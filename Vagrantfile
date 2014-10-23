Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty32"
  config.vm.box_url = "http://files.vagrantup.com/precise32.box"
  config.vm.provision :shell, :path => "bootstrap.sh"
  config.vm.network :forwarded_port, guest: 8000, host: 8000
  config.vm.synced_folder ".", "/vagrant"
  config.ssh.forward_agent = true
  config.vm.network :private_network, ip: "33.33.33.10"
  config.vm.network :public_network
end

