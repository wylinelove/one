<template>
<main>
  <mt-tabbar v-model="selected" fixed class="heard">
    <mt-tab-item id="tab1">
      <img slot="icon" :src="selected=='tab1'?require('../assets/a-in.png'):require('../assets/a.png')">
      推荐
    </mt-tab-item>
    <mt-tab-item id="tab2">
      <img slot="icon" :src="selected=='tab2'?require('../assets/游戏-in.png'):require('../assets/游戏.png')">
      游戏
    </mt-tab-item>
    <mt-tab-item id="tab3">
      <img slot="icon" :src="selected=='tab3'?require('../assets/消息-in.png'):require('../assets/消息.png')">
      消息
    </mt-tab-item>
    <mt-tab-item id="tab4">
      <img slot="icon" :src="selected=='tab4'?require('../assets/我的-in.png'):require('../assets/我的.png')">
      我的
    </mt-tab-item>
  </mt-tabbar>
</main>
</template>
<script>
export default {
  data(){
    return {
      selected:"tab1"
    }
  }
}
</script>
<style scoped>
</style>