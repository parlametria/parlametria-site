export CURRENT_DIR=$(pwd)
cd /root/Parlametria
git pull origin master
docker-compose -f up
cd $CURRENT_DIR