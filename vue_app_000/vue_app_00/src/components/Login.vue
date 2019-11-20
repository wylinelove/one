<template>
  <div class="bg-all" :style="[canWidth,canHeight]">
    <div class="log">
      <input class="user" type="text" v-model="uname" placeholder="用户名/手机号"><br>
      <input class="psd" type="text" v-model="upwd" placeholder="输入密码"><br>
      <div class="log1">
        <a href="#">找回密码</a>
        <a @click="reg()">用户注册</a>
      </div>
      <button @click="log">登录</button>
      <div class="log2">
        <span>——————第三方直接登录——————</span><br>
        <a href="javascript:"><img src="../image/微信.png"></a>
        <a href="javascript:"><img src="../image/qq.png"></a>
        <a href="javascript:"><img src="../image/支付宝.png"></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      uname:"",
      upwd:"",
      canWidth:{width:window.screen.width+'px'},
      canHeight:{height:window.screen.height+'px'}
    }
  },
  methods:{
    reg(){
      this.$router.push("/Register");
    },
    log(){
      var u=this.uname;
      var p=this.upwd;
      if(u==""){
        this.$messagebox("提示信息","请输入用户名或手机号！");
        return;
      }
      if(p==""){
        this.$messagebox("提示信息","请输入密码！");
        return;
      }
      var userReg=/^[a-zA-Z]\w{3,15}$/;
      var phoneReg=/^1[3~9]\d{9}$/;
      var upwdReg=/^[a-zA-Z]{1}([a-zA-Z0-9]){4,19}$/; 
      if(((userReg.test(u)||phoneReg.test(u)!=true)&&upwdReg.test(p))!=true){
        this.$messagebox("提示信息","账号或密码错误");
        return;
      }
      // 发送ajax请求
      var url="/Login";
      var obj={uname:u,upwd:p};
      this.axios.get(url,{params:obj}).then(res=>{
        console.log(res.data.code);
        if(res.data.code<0){
          this.$messagebox("提示信息","账号或密码错误");
        }else{
          // 跳转Product组件
          this.$toast("登录成功");
          this.$router.push("/Wechat");
        }
      })
    }
  }
}
</script>
<style scoped>
  .bg-all{
    background:url("../image/背景1.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment: fixed;
    text-align: center;
  }
  /* 给父元素div设置上外边距 */
  .log{
    padding-top:190px;
  }
  /* 登录输入框父元素样式 */
  .log1{
    margin:9px auto;
    width:260px;
    display:flex;
    justify-content: space-between;
    font-size:13px;
    align-items:center;
    color:#666;
  }
  .log1>a{
    color:#666;
    text-decoration: none;
    -webkit-tap-highlight-color:transparent;
  }
  /* 给用户和密码输入框设置样式 */
  .user,.psd{
    width:230px;
    height:30px;
    margin:10px 0;
    outline:0;
    border-width:0px;
    border-bottom:1px solid #ccc;
    font-size:14px;
    padding:0 4px 1px 32px;
  }
  .user{
    background:url("../image/用户.png") no-repeat left center;
    background-size:20px 20px;
    background-position:3px 4px
  }
  .psd{
    background:url("../image/密码.png") no-repeat left center;
    background-size:20px 20px;
    background-position:3px 4px
  }
  /* 给button设置样式 */
  button{
    background:#00B0F0;
    color:#fff;
    width:270px;
    height:40px;
    border:0px;  outline:0px;
    border-radius:5px;
    margin:36px 0;
  }
  /* 第三方登录样式 */
  .log2{
    margin:0 auto;
    font-size:13px;
    margin-top:90px; 
  }
  .log2>span{
    color:#666;
  }
  .log2>a{
    display:inline-block;
    width:40px;
    height:40px;
    padding:0;
    margin:30px 6px 0;
    border-radius:50%;
    background-color:#fff;
    overflow: hidden;
    -webkit-tap-highlight-color:transparent;
  }
  .log2>a>img{
    margin-top:3px;
  }
</style>