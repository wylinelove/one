<template>
  <div>
    <!-- 顶部标题----结束 -->
    <mt-header class="tnav">
        <mt-button class="tbar" slot="left">英雄联盟</mt-button>
        <mt-button class="tbar" slot="right">
          <a href="javascript:;" class="tbimg" @click="tiao"></a>
        </mt-button>
    </mt-header>
    <a href="javascript:;" @click="bi" :style="[biLeft,biTop]" class="insertstyle"></a>
    <!-- 顶部标题----结束 -->
    <!-- 大标题下的3个字面板标题----开始 -->
    <div class="btn">
      <button data-id="tab1" :class="{showb:active=='tab1'?true:false}" @click="handle">全部</button>
      <button data-id="tab2" :class="{showb:active=='tab2'?true:false}" @click="handle">开黑交友</button>
      <button data-id="tab3" :class="{showb:active=='tab3'?true:false}" @click="handle">赛事讨论</button>
    </div>
    <!-- 大标题下的3个字面板标题----结束 -->
    <!-- 3个子面板内容-----------开始 -->
    <mt-tab-container v-model="active" :swipeable="true">
      <!-- 子面板1----开始 -->
      <mt-tab-container-item id="tab1">
        <div  class="navstyle">
          <div class="bgstyle" v-for="(item,index) in list" :key="index">
            <div class="nbarstyle">
              <div class="tistyle">
                <a href="javascript:;"><img src="@/assets/lol.png" alt=""></a>
                <div class="titstyle">
                  <a href="Javascript:;">{{item.uid}}</a>
                  <span>1分钟前</span>
                </div>
              </div>
              <a href="javascript:;"><img src="@/assets/txterr.png"></a>
            </div>
            <span>{{item.bbs}}</span>
            <a class="tiestyle" href="javascript:;">
              <img src="@/assets/ig.png">
              <span>{{item.title}}</span>
            </a>
            <div class="pingstyle">
              <a href="javascript">卧槽：</a>
              <span>6666</span>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <!-- 子面板1----结束 -->
      <!-- 子面板2----开始 -->
      <mt-tab-container-item id="tab2">
        海贼王手办海贼王手办海贼王手办海贼王手办海贼王手办海贼王手办海贼王手办海贼王手办海贼王手办海贼王手办<br>
        火影忍者手办<br>
        妖精的尾巴手办妖精的尾巴手办妖精的尾巴手办妖精的尾巴手办妖精的尾巴手办妖精的尾巴手办妖精的尾巴手办<br>
      </mt-tab-container-item>
      <!-- 子面板2----结束 -->
      <!-- 子面板3----开始 -->
      <mt-tab-container-item id="tab3">
        麻将馆麻将馆麻将馆麻将馆麻将馆麻将馆麻将馆麻将馆麻将馆麻将馆麻将馆麻将馆麻将馆麻将馆麻将馆麻将馆<br>
        足疗馆<br>
        按摩中心按摩中心按摩中心按摩中心按摩中心按摩中心按摩中心按摩中心按摩中心按摩中心按摩中心按摩中心
      </mt-tab-container-item>
      <!-- 子面板3----结束 -->
    </mt-tab-container>
  </div>
  <!-- 3个子面板内容-----------结束 -->
</template>
<script>
//负责引入json文件
// import Textt from "../json/Textt.json"

export default {
  data(){
    return {
      active:"tab1",
      showb:false,
      // datas:Textt,
      biLeft:{left:screen.width-63+'px'},
      biTop:{top:screen.height-90+'px'},
      list:[]
    }
  },
  created(){
    this.noun(
    );
  },
  methods:{
    tiao(){
      this.$router.push("/Wechat")
    },
    noun(){
      var url="/noun";
      this.axios.get(url).then(res=>{
        this.list=res.data.data;
        console.log(this.list)
      })
    },
    
    // 3个子面板标题的点击事件
    handle(){
      var id=event.target.dataset.id;
      this.active=id;
    },
    bi(){
      this.$router.push("/Ping")
    }
  }
}
</script>
<style scoped>
  a{
    -webkit-tap-highlight-color:transparent;
  }


  .mint-tab-container-item{
    margin-top:50px;
  }
  .navstyle{
    width:98%;
    margin: 0 auto;
    margin-top:3px; 
  }
  .nbarstyle{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:7px 6px 3px;
    box-sizing: border-box;
    width:100%;
    border-radius:4px;
  }
  .tistyle{
    display:flex;
    align-items:center;
  }
  .nbarstyle>.tistyle>a>img{
    margin-top:2px; 
    width:40px;
    height:40px;
    border-radius:50%;
  }
  .nbarstyle>a>img{
    width:24px;
    height:24px;
  }
  .titstyle{
    display:flex;
    flex-direction:column;
    margin-left:12px; 
  }
  .tistyle>.titstyle>a{
    text-decoration:none;
    color:#000;
    font-size:15px;
  }
  .tistyle>.titstyle>span{
    color:#8e8e8e;
    font-size:13px;
  }
  .bgstyle{
    width:100%;
    background: #F5F5F5;
    border-radius:4px;
    padding:0 12px;
    padding-bottom:12px;
    box-sizing: border-box;
    margin:4px 0;
  }
  .bgstyle>span{
    display:block;
    margin:0 10px;
    text-align: justify;
  }
  .mint-tab-container{
    margin-top:29px;
  }
  .tiestyle{
    margin:6px 0;
    background:#fff;
    width:100%;
    display:flex;
    align-items:center;
    color:#000;
    font-size:14px;
    text-align: justify;
    padding:3px 8px 3px 3px;
    box-sizing:border-box;
    border-radius:4px;
    text-decoration:none;
  }
  .tiestyle>img{
    width:60px;
    margin-right:12px;
    border-radius:2px;
  }
  .pingstyle{
    padding-left:24px;
    font-size:13px;
    border-left:5px solid rgb(203, 203, 204);
  }
  .pingstyle>a{
    color:#000;
    text-decoration:none;
  }
  .pingstyle>span{
    color:#646464;
  }
  .insertstyle{
    display:block;
    position:fixed;
    width:50px;
    height:50px;
    border-radius:50%;
    background-color:#FFBF3D;
    background-image: url("../assets/pen.png");
    background-repeat: no-repeat;
    background-position:9px 9px;
    z-index:60;
  }

  /* 顶部标题---------------开始 */
  .tnav{
    background:#17978D;
    width:100%;
    font-size:18px;
    height:50px;
    position:fixed;
    top:0; left:0;
    z-index:3;
  }
  .tbar{
    margin:4px;
  }
  .tbimg{
    margin-top:4px;
    display:inline-block;
    width:23px;
    height:23px;
    border-radius:3px;
    border:1px solid rgba(255,255,255,0.4);
    line-height:23px;
    background-image:url("../assets/errtwo.png");
    background-repeat: no-repeat;
    background-size: 15px 16px;
    background-position:3px 3px;
  }
  .tbimg>img{
    width:14px;
    height:14px;
  }
  /* 顶部标题样式---------------结束 */
  /* 大标题下的3个字面板标题----开始 */
  .btn{
    position:fixed;
    top:47px;
    left:0;
    text-align:left;
    width:100%;
    border-bottom:1px solid #ccc;
    padding:2px 0;
    background:#fff;
    z-index:3;
  }
  .showb{
    border-bottom:2px solid #ccc!important;
    border-bottom-left-radius:30%;
    font-weight:bold;
  }
  .btn>button{
    color:#000;
    background:rgba(255,255,255,0);
    outline:0;
    box-sizing: border-box;
    height:26px;
    border:0;
    margin:0 8px;
  }
  /* 大标题下的3个字面板标题----结束 */
  /* 3个子面板内容样式 */
</style>