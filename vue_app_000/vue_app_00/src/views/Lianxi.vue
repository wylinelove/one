<template>
  <main>
    <div class="kuang" v-for="(item,i) in items" :key="i">
      <img :src="item.url" alt="">
      <div class="txt">
        <div>{{item.name}}</div>
        <div id="lang">{{item.msg01}}<span>{{item.msg02}}</span>{{item.msg03}}</div>
        <div><span>{{item.msg04}}{{item.msg05}}</span></div>
        <!-- <button @click="show(i)">{{item.state==0?msg="预约":msg="已预约"}}</button> -->
      </div>
      <div>
        <button @click="show(i)">{{item.state==0?msg="预约":msg="已预约"}}</button>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data(){
    return {
      msg:"预约",
      items:[
       { name:"英雄联盟手游",state:1,url:require('@/assets/yxlmsy.jpg'),msg01:"英雄联盟正版/",msg02:"MOBA",msg03:"/经典还原",msg04:"56.9",msg05:"万人已预约",} ,
       { name:"使命召唤手游",state:0,url:require('@/assets/smzhsy.jpg'),msg01:"使命召唤射击/",msg02:"FPS",msg03:"/竞技",msg04:"7.9",msg05:"万人已预约",},
       { name:"天涯明月刀",state:0,url:require('@/assets/tymyd.jpg'),msg01:"角色扮演/",msg02:"MMORPG",msg03:"/武侠",msg04:"16.6",msg05:"万人已预约",},
       { name:"荒野乱斗",state:0,url:require('@/assets/hyld.jpg'),msg01:"3v3/",msg02:"io",msg03:"/supercell",msg04:"2.8",msg05:"万人已预约",},
       { name:"龙族幻想",state:0,url:require('@/assets/lzhx.jpg'),msg01:"二次元/",msg02:"虚拟4引擎",msg03:"/开放世界",msg04:"14.0",msg05:"万人已预约",},
       { name:"王牌战士",state:0 ,url:require('@/assets/wpzs.jpg'),msg01:"射击/",msg02:"mobo",msg03:"/二次元",msg04:"8.0",msg05:"万人已预约",},
       { name:"英雄就是我",state:0 ,url:require('@/assets/yxjsw.jpg'),msg01:"像素/",msg02:"像素风格",msg03:"/接机",msg04:"1.7",msg05:"万人已预约",},
       { name:"三国杀十周年",state:0,url:require('@/assets/sgsszn.jpg'),msg01:"免费/",msg02:"三国",msg03:"/新游",msg04:"9.8",msg05:"万人已预约",},
        ]
    }
  },
  methods:{
    show(i){
        if(this.items[i].state==0){
        this.items[i].state=1;
        }else{
        this.items[i].state=0;
        }
    }
  }
}
</script>
<style scoped>
  main{
    margin-bottom:5rem;
  }
.kuang{
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom:8px;
  padding-left:10px;
  padding-right:10px;
}
  .kuang>img{
    width: 80px;
  }
  .txt{
    width:192px;
    height:80px;
  }
  .txt>div:nth-child(1){
    font-size: 18px;
    font-weight: 900;
    /* margin-bottom: 8px; */
  }
  .txt>div:nth-child(2){
    font-size: 12px;
    color:#8F8F8F;
    margin-bottom: 8px;
  }
  .txt>div:nth-child(2)>span{
    color:#000;
  }
  .txt>div:nth-child(3)>span{
    color:#8F8F8F;
  }
  .kuang>div>button{
    width:60px;
    height:30px;
    color: #000;
    background-color: #FFD39B;
    border:1px solid #FF8C00;
    margin-top:45%;
  }
</style>