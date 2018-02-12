# Setting up HTTPS on a Website Using Nginx and Namecheap  

[Basic Overall Steps to Follow](http://www.howto-expert.com/how-to-get-https-setting-up-ssl-on-your-website/)

## Step 1: Install Nginx as the Web Server
```shell
apt-get install -y nginx
sudo ufw allow "Nginx HTTPS"
sudo ufw allow "Nginx HTTP"
sudo ufw allow ssh
sudo ufw status
```

## Step 2: Generate a CSR
Steps were pulled off of this site: [Namecheap Documentation](https://www.namecheap.com/support/knowledgebase/article.aspx/467/67/how-do-i-generate-a-csr-code)  
Specifically from this page: [NameCheap Documentation for AWS Instances](https://www.namecheap.com/support/knowledgebase/article.aspx/9592/0/aws)
```shell
sudo apt-get install -y openssl
openssl genrsa 2048 > jasononline-private-key.pem
openssl req -new -key jasononline-private-key.pem -out csr.pem
```

## Step 3: Buy a Certificate
You will need to shop for a certificate online, a common choice is namecheap, you can look at prices here: [https://www.namecheap.com/security/ssl-certificates.aspx](https://www.namecheap.com/security/ssl-certificates.aspx)  
  
## Step 4: Activating/Installing the Certificate
[Instructions from Namecheap for how to complete the domain control validation (DCV) for my SSL certificate](https://www.namecheap.com/support/knowledgebase/article.aspx/9637/68/how-can-i-complete-the-domain-control-validation-dcv-for-my-ssl-certificate)  
  
## Step 5: Updating Nginx to use HTTPS  
[Reference Page for Setting up HTTPS](https://www.digicert.com/csr-ssl-installation/nginx-openssl.htm)
[Reference Page for redirecting HTTP to HTTPS](https://www.digitalocean.com/community/questions/best-way-to-configure-nginx-ssl-force-http-to-redirect-to-https-force-www-to-non-www-on-serverpilot-free-plan-by-using-nginx-configuration-file-only)
  
### Commands
```shell
sudo vim /etc/nginx/sites-available/default #Editing the Nginx virtual hosts file
```
```
server {
  listen 80 default_server;
  listen [::]:80 default_server;
  server_name _;
  return 301 https://jasononline.ca$request_uri;
}

server {
  listen 443 default_server;
  listen [::];443 default_server;
  root /path/to/index
  index index.html index.htm index.nginx-debian.html;

  ssl  on;
  ssl_certificate  /etc/ssl/jasononline_ca.crt;
  ssl_certificate_key  /etc/ssl/jasononline-private-key.pm;
  server_name _;
  location / {
    try_files $uri $uri/ =404;
  }
}
```
[Nginx Reference Page](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04)
UFW Reference Pages
[Ubuntu](https://help.ubuntu.com/community/UFW)
[Debian](https://wiki.debian.org/Uncomplicated%20Firewall%20%28ufw%29)