//app.js 服务器端程序
//1:下载三个模块 
//  cors            完成跨域处理
//  express-session session对象
//  mysql           数据库驱动
//  express         web服务器
//下载命令在线  
//npm i cors express-session express  mysql
//2:将以上四个模块引入到当程序
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session"); 
//3:创建数据库连接池(池 提高效率)
var pool = mysql.createPool({
    host:"127.0.0.1", //数据库地址
    user:"root",      //数据库用户名
    password:"",      //数据库密码
    port:3306,      //数据库端口
    database:"wechat",//库名
    connectionLimit:15//15连接
})
//4:配置跨域模块
//  允许哪个程序跨域访问服务器
//  脚手架:3001 允许3001访问我
//  服务器:4000 你
var server = express();
server.use(cors({
  //允许程序列表
  origin:["http://127.0.0.1:3001","http://localhost:3001"],
  credentials:true//每次请求需要验证
}))
//5:配置session模块?????????
server.use(session({
   secret:"128位字符串",//安全字符串
   resave:true,//请求时更新数据
   saveUninitialized:true//保存初始数据
}))
//6:配置项目静态目录 public
server.use(express.static("public"))
//7:创建express对象绑定4000端口
server.listen(4000);

//8:功能一:完成用户登录
server.get("/Login",(req,res)=>{
//(1)获取脚手架参数 uname upwd
var uname = req.query.uname;
var upwd = req.query.upwd;
//(2)创建sql语句查询
var sql = "SELECT uid FROM wc_user WHERE uname = ? AND upwd =?";
//(3)执行sql语句
pool.query(sql,[uname,upwd],(err,result)=>{
 if(err)throw err;
 //(4)获取执行结果
 //(5)判断查询是否成功 result.length
 if(result.length==0){
   res.send({code:-1,msg:"用户名或密码有误"})
 }else{
  //  5.1保存用户id在session对象中
   req.session.uid=result[0].uid;
   res.send({code:1,msg:"登录成功"})
 }
 //(6)将结果返回脚手架
})
})

//#检测
//(1)查询数据库是否有xz_login
//   USE xz;
//   SELECT * FROM xz_login;
//(2)启动服务器
//   node app.js
//(3)打开浏览器在地址栏输入按回
//   http://127.0.0.1:4000/login?uname=tom&upwd=123
//   http://127.0.0.1:4000/login?uname=tom&upwd=122


// 9:功能二：完成用户注册
server.get("/Register",(req,res)=>{
  //(1)获取脚手架参数 uname upwd
  var uname=req.query.uname;
  var upwd=req.query.upwd;
  var phone=req.query.phone;
  var email=req.query.email;
  //(2)创建sql语句查询
  var sql="INSERT INTO wc_user VALUES (null,?,?,?,?)";
  pool.query(sql,[uname,upwd,phone,email],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"注册成功"});
    }else{
      res.send({code:-1,msg:"注册失败"});
      return;
    }
    //(4)获取执行结果
    //(5)判断查询是否成功 result.length
  })
})
//    http://127.0.0.1:4000/register?uname=999&upwd=123&phone=176381&email=154204790@qq.com



// 9.1查询用户名是否已注册
server.get("/check",(req,res)=>{
  //(1)获取脚手架参数
  var uname=req.query.uname;
  //(2)创建sql语句查询
  var sql="SELECT uid FROM wc_user WHERE uname = ?";
  pool.query(sql,[uname],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:-1,msg:"用户名已注册"});
      return;
    }else{
      res.send({code:1,msg:"用户名可用"})
    }
  })
})


// 9.2查询用户名是否已注册
server.get("/check1",(req,res)=>{
  //(1)获取脚手架参数
  var phone=req.query.phone;
  //(2)创建sql语句查询
  var sql="SELECT uid FROM wc_user WHERE phone = ?";
  pool.query(sql,[phone],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send({code:-1,msg:"手机号码已注册"});
      return;
    }else{
      res.send({code:1,msg:"手机号码可用"})
    }
  })
})






// 发表文章
server.get('/make',function(req,res){
  var uid=req.session.uid;
  var bbs=req.query.make;
  var sql='INSERT INTO nei(uid,bbs) VALUES(?,?)';
  pool.query(sql,[uid,bbs],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"发表成功"})
    }else{
      res.send({code:-1,msg:"发表失败"})
    }
  })
})

//    http://127.0.0.1:4000/make?make=66666666666







//获取当前内容
server.get('/noun',function(req,res){
  var sql='SELECT * FROM nei order by id desc';
  pool.query(sql,(err,result)=>{
    console.log(result)
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,data:result});
    }else{
      res.send({code:-1,msg:"用户未发表过帖子"})
    }
  })
})
//    http://127.0.0.1:4000/noun