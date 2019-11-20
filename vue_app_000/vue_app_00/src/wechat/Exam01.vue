<!--模板-->
<template>
  <div id="home">
    <!-- <h3>Exam01 轮播图</h3> -->
    <mt-swipe :auto="4000" :speed="1500">
      <mt-swipe-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.src" class="img">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>

export default {
  name:"home",
  data(){
    return{
      imgs:[
        {
          index:1,
          src:require('../assets/111.jpg')
        },
        {
          index:2,
          src:require('../assets/222.jpg')
        },
        {
          index:3,
          src:require('../assets/333.jpg')
        },
        {
          index:4,
          src:require('../assets/444.jpg')
        },
        {
          index:5,
          src:require('../assets/555.jpg')
        },
       
      ]
    }
  }
}
</script>
<style scoped>
  img{
    width:100%;
  }
  .mint-swipe{
    height: 218px;
  }

</style>