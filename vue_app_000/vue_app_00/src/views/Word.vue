<template>
<div>
<!-- 头部 -->
<mt-navbar id="toubu"  v-model="selected">
  <mt-tab-item id="1">
    <span style="font-size:20px;line-height:20px;">消息</span>
  </mt-tab-item>
  <mt-tab-item id="2">
    <span style="font-size:20px;line-height:20px;">聊天</span>
  </mt-tab-item>
  <mt-tab-item id="3">
    <span style="font-size:20px;line-height:20px;">通知</span>
  </mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
     <aite></aite> 
     <div class="no_new">
        <img src="../assets/no_new.png" alt="" style="width:8rem;height:8rem;" >
     </div>
     <h6 class="no_word">暂无消息</h6> 
  </mt-tab-container-item>
  <mt-tab-container-item id="2" class="mt-2">
      <div class="rootstyle" v-for="(item,index) of list.data" :key="index">
        <!-- 1.1左侧一组[图片/标题] -->
        <div class="leftimgtxt">
            <!-- 1.1.1 左侧图片 -->
            <img :src="require(`../assets/timg.jpg`)" class="imgstyle"/>
            <!-- 1.1.2 左侧的标题 -->
            <div class="titlestyle">
                <span class="title">
                  {{item.title}}
                </span>
                <span class="subtitle">
                  {{item.subtitle}}
                </span>
            </div>
        </div>
        <!-- 1.2右侧时间 -->
        <span class="sendtime">
          {{item.time}}
        </span>
      </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <div class="no_new">
        <img src="../assets/no_new.png" alt="" style="width:9rem;height:9rem;">
     </div>
     <h6 class="no_word">暂无消息</h6> 
  </mt-tab-container-item>
</mt-tab-container>
</div>
</template>
<script>
// 引入一个json文件  是聊天数据
import mlist from "../json/messagelist.json"
export default {
  data(){
    return {
      selected:"1",
      // 将读取的数据保存在list显示
      list:mlist
    }
  }
}
</script>  
<style scoped>
    #toubu{
      width:100%;height:3rem;
      line-height: 3rem;
    }
    .no_new{
      margin-top:20%;
    }
    .no_word{
      margin-top:2rem;
      color:#333;
      font-size:12px;
    }
    /* 1:一条消息 */
    /* 1.1:父元素  弹性布局 */
    .rootstyle{
        display:flex;  /*弹性布局*/
        justify-content:space-between;  /*两端对齐*/
        align-items:center;  /*垂直居中*/
        border-bottom:1px solid #ccc;
    }
    /* 1.2:左侧的图片与标题 */
    .leftimgtxt{
        display:flex; /*弹性布局*/
        align-items:center;/*垂直居中*/
    }
    /* 1.3:修改图片样式 */
    .imgstyle{
        width:50px;height:50px;
    }
    /* 1.4:标题布局 */
    .titlestyle{
        display:flex;/*弹性布局*/
        flex-direction:column; /*子元素排列方式:列*/
        justify-content:center; /*水平居中*/
        margin-left:7px; /* 左侧外边距:与图片间距离 */
    }
    /* 1.5:标题样式 */
    .title{
        color:#000;
        font-size:17px;
    }
    /* 1.6:子标题样式 */
    .subtitle{
        color:#666;
        margin-top:4px;  /*与标题的间距*/
    }
    /* 1.7:发送时间 */
    .sendtime{
        color:#666;
    }
    /* 暂无消息、通知 */
    
</style>
