1.修改配置文件mongodb.conf
bind_ip=127.0.0.1 这一行注释掉
或者是修改成 bind_ip=0.0.0.0

2.重启mongodb服务

命令：/etc/init.d/mongodb restart 或 service mongodb restart
不行就运行mongod -f /mongo/etc/mongo.conf

2.1防火墙开放27017端口
命令：iptables -A INPUT -p tcp -m state --state NEW -m tcp --dport 27017 -j ACCEPT
必要时：设置云服务器安全组，配置 27017端口入权限

3.远程连接

要连接的IP：134.567.345.23

命令：mongo 134.567.345.23:27017/test -u root -p ******

这样就可以连接到134.567.345.23的mongodb/test的数据库
 

连接到自定义的用户××

1.增加

> use admin
switched to db admin
> db.addUser('username','password')
2.远程连接

命令： mongo 134.567.345.23:27017/admin -u username -p
