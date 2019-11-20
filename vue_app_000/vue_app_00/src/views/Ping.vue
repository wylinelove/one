<template>
  <div>
    <textarea cols="30" rows="10" placeholder="请输入内容！" v-model="make"></textarea><br>
    <button @click="ping">发表</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      make:""
    }
  },
  created(){
    this.log();
  },
  methods:{
    ping(){
      var url="/make";
      var obj={make:this.make};
      this.axios.get(url,{params:obj}).then(res=>{
        if(res.data.code>0){
          this.$toast("评论成功");
          this.$router.push("/textnav")
        }else{
          this.$toast("评论失败");
          return;
        }
      })
    },
    log(){
      var url="/nou";
      this.axios.get(url).then(res=>{
        if(res.data.code==-1){
          this.$toast("请登录");
          this.$router.push("/Login");
          return;
        }
      })
    }
  }
}
</script>
<style scoped>
  textarea{
    display: block;
    margin: 30px auto;
    font-size: 16px;
    width: 96%;
    box-sizing: border-box;
  }
  button{
    display: block;
    width:85%;
    height: 40px;
    background: #aa7572;
    outline: 0;
    border: 0;
    border-radius: 5px;
    margin: 0 auto;
  }
</style>