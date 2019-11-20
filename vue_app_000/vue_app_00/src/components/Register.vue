<template>
  <div class="bg-all">
    <div :style="[canWidth,canHeight]">
      <h2>用户注册</h2>
      <input type="text" v-model="uname" class="uname" placeholder="请输入名称"><br>
      <span class="reg1">{{umsg}}</span><br>
      <input v-model="upwd" type="text" class="upwd" placeholder="请输入密码"><br>
      <span class="reg1">{{pmsg}}</span><br>
      <input v-model="upwd2" type="text" class="upwd2" placeholder="请再次输入密码"><br>
      <span class="reg1">{{p2msg}}</span><br>
      <input v-model="phone" type="text" class="phone" placeholder="请输入手机号"><br>
      <span class="reg1">{{phmsg}}</span><br>
      <input v-model="email" type="text" class="email" placeholder="请输入邮箱"><br>
      <span class="reg1">{{emsg}}</span><br>
      <button @click="register">注册</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      uname:"",
      upwd:"",
      upwd2:"",
      phone:"",
      email:"",
      umsg:"用户名以字母开头4~15位.",
      pmsg:"密码以字母开头5~19位.",
      p2msg:"请再次输入密码.",
      phmsg:"请输入手机号码.",
      emsg:"请输入邮箱.",
      canWidth:{width:window.screen.width+'px'},
      canHeight:{height:window.screen.height+'px'}
    }
  },
  watch:{
    // 用户名验证
    uname(){
      var url="/check";
      var obj={uname:this.uname};
      this.axios.get(url,{params:obj}).then(res=>{
        if(res.data.code<0){
          this.umsg="用户名已注册！";
          return;
        }else{
          if(this.uname!=""){
            if(/^[a-zA-Z]\w{3,15}$/.test(this.uname)!=true){
              this.umsg="用户名格式错误！";
              return;
            }else{
              this.umsg="用户名可用！";
            }
          }else{
            this.umsg="用户名不能为空！";
            return;
          }
        }
      })
    },
    upwd(){
      if(this.upwd!=""){
        if(/^[a-zA-Z]{1}([a-zA-Z0-9]){4,19}$/.test(this.upwd)!=true){
          this.pmsg="密码格式错误！";
          return;
        }else{
          this.pmsg="密码可用！";
        }
      }else{
        this.pmsg="密码不能为空！";
        return;
      }
    },
    upwd2(){
      if(this.upwd2!=""){
        if(this.upwd!=this.upwd2){
          this.p2msg="密码两次密码输入不一致！";
          return;
        }else{
          if(/^[a-zA-Z]{1}([a-zA-Z0-9]){4,19}$/.test(this.upwd2)!=true){
            this.pmsg="密码格式错误！";
            return;
          }else{
            this.p2msg="密码可用！";
          }
        }
      }else{
        this.p2msg="确认密码不能为空！";
        return;
      }
    },
    // 手机号码验证
    phone(){
      var url="/check1";
      var obj={phone:this.phone};
      this.axios.get(url,{params:obj}).then(res=>{
        if(res.data.code<0){
          this.phmsg="手机号码已注册！";
          return;
        }else{
          if(this.phone!=""){
            if(/^1[3-9]\d{9}$/.test(this.phone)!=true){
              this.phmsg="手机号码格式错误！";
              return;
            }else{
              this.phmsg="手机号码可用！";
            }
          }else{
            this.phmsg="手机号码不能为空！";
            return;
          }
        }
      })
    },
    email(){
      if(this.email!=""){
        if(/^\w+@[a-z0-9]+\.[a-z]{2,4}$/.test(this.email)!=true){
          this.emsg="邮箱格式错误！";
          return;
        }else{
          this.emsg="邮箱可用！";
        }
      }else{
        this.emsg="邮箱不能为空！";
        return;
      }
    }
  },
  methods:{
    register(){
      if(this.uname==""){
        this.$messagebox("提示信息","用户名不能为空！");
        return;
      }
      if(this.upwd==""){
        this.$messagebox("提示信息","密码不能为空！");
        return;
      }
      if(this.upwd2==""){
        this.$messagebox("提示信息","确认密码不能为空！");
        return;
      }
      if(this.phone==""){
        this.$messagebox("提示信息","手机号码不能为空！");
        return;
      }
      if(this.email==""){
        this.$messagebox("提示信息","邮箱不能为空！");
        return;
      }
      if(this.umsg=="用户名已注册！"){
        this.$messagebox("提示信息","用户名已注册！");
        return;
      }
      if(this.phmsg=="手机号码已注册！"){
        this.$messagebox("提示信息","手机号码已注册！");
        return;
      }
      var unameReg=/^[a-zA-Z]\w{3,15}$/;
      if(unameReg.test(this.uname)==false){
        this.$messagebox("提示信息","用户名格式错误！");
        return;
      }
      var upwdReg=/^[a-zA-Z]{1}([a-zA-Z0-9]){4,19}$/;
      if(upwdReg.test(this.upwd)==false){
        this.$messagebox("提示信息","密码格式不正确！");
        return;
      }
      if(this.upwd2!=this.upwd){
        this.$messagebox("提示信息","两次密码输入不一致！");
        return;
      }
      var upwdReg=/^[a-zA-Z]{1}([a-zA-Z0-9]){4,19}$/;
      if(upwdReg.test(this.upwd)==false){
        this.$messagebox("提示信息","密码格式不正确！");
        return;
      }
      var phoneReg=/^1[3-9]\d{9}$/;
      if(phoneReg.test(this.phone)==false){
        this.$messagebox("提示信息","手机号码格式不正确！");
        return;
      }
      var emailReg=/^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
      if(emailReg.test(this.email)==false){
        this.$messagebox("提示信息","邮箱格式不正确！");
        return;
      }
      // 发送ajax请求
      var url="/Register";
      var u=this.uname;
      var p=this.upwd;
      var p2=this.upwd2;
      var n=this.phone;
      var m=this.email;
      var obj={uname:this.uname,upwd:this.upwd,phone:this.phone,email:this.email}
      this.axios.get(url,{params:obj}).then(res=>{
        if(res.data.code<0){
          this.$messagebox("提示信息","账号或密码错误");
          return;
        }else{
          this.$toast("注册成功");
          // 跳转Product组件
          this.$router.push("/Login")
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
  h2{
    padding-top:60px;
    margin:0;
    margin-bottom:36px;
    color:#666;
    font-weight:normal;
  }
  span{
    color:#666;
  }
  input{
    border:1px solid rgb(170, 170, 170);
    background-color:rgba(255,255,255, 0.5);
    margin:1px 0;
    width:190px;
    font-size: 13px;
    height:23px;
    border-radius:5px;
    padding:3px 6px 3px 30px;
    outline:0;
  }
  button{
    background:#00B0F0;
    color:#fff;
    width:220px;
    height:40px;
    border:0px;  outline:0px;
    border-radius:5px;
    margin:30px;
  }
  .reg1{
    margin-left:19px;
    display: inline-block;
    width:200px;
    font-size:10px;
    text-align:left;
  }
  .uname{
    background:url("../image/用户.png") no-repeat left center;
    background-size:15px 15px;
    background-position:7px 3px;
  }
  .upwd{
    background:url("../image/密码2.png") no-repeat left center;
    background-size:15px 15px;
    background-position:7px 3px;
  }
  .upwd2{
    background:url("../image/确认密码.png") no-repeat left center;
    background-size:15px 15px;
    background-position:7px 3px;
  }
  .phone{
    background:url("../image/手机号码.png") no-repeat left center;
    background-size:15px 15px;
    background-position:7px 3px;
  }
  .email{
    background:url("../image/邮箱.png") no-repeat left center;
    background-size:15px 15px;
    background-position:7px 3px;
  }
</style>