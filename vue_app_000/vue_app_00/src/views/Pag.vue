<template>  
  <main>
    <!-- 顶部header  -->
      <div class="top">
        <span>
          游戏
        </span> 
        <div>
          <a class="top_r" href="javascript:;">       
            <img src="../assets/scan.png" alt="" style="width:1.4rem;height:1.4rem;">
          </a>
          <router-link :to="{path:'Search'}" class="top_r" href="javascript:;">
            <img src="../assets/search.png" alt="" style="width:1.4rem;height:1.4rem;">
          </router-link>
        </div>
      </div>
      <div class="tab">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">推荐</mt-tab-item>
          <mt-tab-item id="2">关注</mt-tab-item>
        </mt-navbar>
      </div>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <!-- 推荐面内容 -->
            <!-- <exam01></exam01> -->
            <!-- <lianxi></lianxi> -->
            <flish></flish>
            <lianxi class="lx"></lianxi>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">   
            <!-- 关注面内容 -->
            <lianxi class="lx"></lianxi>
          </mt-tab-container-item>
      </mt-tab-container>
  </main>
</template>
<script>
// 1:引入子组件
import Flish from "../views/Flish"
import Lianxi from "../views/Lianxi"
export default {
  data(){
    return {
      value:"",
      selected:"1"
    }
  },
  components:{
    "flish":Flish,
    "lianxi":Lianxi
  }
}
</script>
<style scoped>
  .now{
    text-align:left;
  }
  .lx{
    margin-top:10px;
  }
  .is-selected{
    z-index:1;
  }
  a{
    text-decoration:none;
    color:#000;
  }
  /* heard */
  .top{
      width:100%;height:3rem;
      line-height: 3rem;
      border-bottom:1px solid #ccc;
      display:flex;
      justify-content: space-between;
      font-size:20px;
      text-indent:1.2rem;
  }
  .top_r{
      margin:0 10px;
  }
</style>