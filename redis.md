installing redis =>
sudo apt-get update
sudo apt-get install build-essential
 sudo apt-get install tcl8.5
wget http://download.redis.io/releases/redis-stable.tar.gz
tar xzf redis-stable.tar.gz
cd redis-stable
make
make test
sudo make install

cd utils
sudo ./install_server.sh


sudo service redis_6379 start
sudo service redis_6379 stop


Redis is often described as an in-memory persistent key-value store.
Redis exposes five different data structures
Redis treats values as a byte array

Memory and Persistence
With respect to persistence, by default, Redis
snapshots the database to disk based on how many keys have changed. You configure it so that if X number of keys
change, then save the database every Y seconds. By default, Redis will save the database every 60 seconds if 1000 or
more keys have changed all the way to 15 minutes if 9 or less keys has changed.