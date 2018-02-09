下载node.js
wget https://npm.taobao.org/mirrors/node/v6.10.3/node-v6.10.3-linux-x64.tar.xz
解压xz/gz
xz -d node-v6.10.3-linux-x64.tar.xz / tar -xzvf node-v6.10.3-linux-x64.tar.gz
解压tar
tar -xvf node-v6.10-linux-x64.3.tar
用ln 建立软连接
ln -s /node-v6.10.3-linux-x64/bin/node /usr/local/bin/node
ln -s /node-v6.10.3-linux-x64/bin/npm /usr/local/bin/npm
