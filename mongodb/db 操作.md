1.增
db.user.insert({userId:101,userName:'jack',userAge:28,class:{name:'imooc',num:10}})
db.user.insert({userId:102,userName:'tom',userAge:38,class:{name:'baidu',num:20}})
db.user.insert({userId:103,userName:'jackas',userAge:58,class:{name:'taobao',num:30}})
db.user.find()
db.user.find().pretty()//格式化输出
db.user.findOne()
2.删
db.user.remove({userId:101})

3.改
修改年龄：
db.user.update({userName:'jack'},{$set:{userAge:30}})
修改子文档：
db.user.update({userName:'jack'},{$set:{'class.name':'imooc-test'}})

4.查
db.user.find({'userName':'jack'})
查子文档
db.user.find({'class.name':'baidu'})
条件查询
db.user.find({'userAge':{$gt:40}})
db.user.find({'userAge':{$lt:40}})
db.user.find({'userAge':{$eq:58}})//等于


无可视工具导入数据表====》》》
db.createCollection("db_demo")
mongoimport -d db_demo -C users --file /目录/文件
