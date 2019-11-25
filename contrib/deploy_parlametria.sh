export CURRENT_DIR=$(pwd)
cd /root/Parlametria
git pull origin master
docker-compose up -d &&
cd $CURRENT_DIR