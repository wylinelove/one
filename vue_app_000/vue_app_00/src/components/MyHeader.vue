<template>
  <main>
    <div class="top">
      <div class="top_l">
        <a href="#">
          <img src="../assets/scan.png" alt="" style="width:1.4rem;height:1.4rem;">
        </a>
      </div>
      <div class="my">我的</div>
      <div class="top_r">
        <a href="#">
          <img src="../assets/set.png" alt="" style="width:1.4rem;height:1.4rem;">
        </a>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .top{
    margin-top:0.5rem;
    display:flex;
    width:100%;height:3rem;
    position:relative;
    border-bottom:1px solid #ccc;

  }
  .top_l{
    position:absolute;
    left:10px;top:5px;
  }
  .my{
    position:absolute;
    left:47%;top:10px;
    font-weight:400;
    font-size:20px;
    line-height:20px;
  }
  .top_r{
    position:absolute;
    right:10px;top:5px;
  }
</style>