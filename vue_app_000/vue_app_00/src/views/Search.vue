<template>
    <main>
        <div class="top">
            <input type="text" placeholder="请输入要搜索的游戏" class="inp">
            <img src="../assets/search.png" alt="">
            <router-link :to="{path:'Wechat'}" style="color:#000;">取消</router-link>
        </div>
        <div class="con">
            <p class="mt-2">热门搜索</p>
        </div>
        <div class="label">
            <a href="">英雄联盟</a>
            <a href="">地下城与勇士</a>
            <a href="">穿越火线</a>
            <a href="">斗地主</a>
            <a href="">使命召唤射击</a>
            <a href="">天涯明月刀</a>
            <a href="">凡人修仙传</a>
            <a href="">凡人修仙传</a>
            <a href="">凡人修仙传</a>
        </div>
    </main>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    a{
        text-decoration: none;
        color:#f5f5f5;
    }
    main{
        margin-top:10px;
    }
    .top{
        margin-left:10px;
    }
    .inp{
        position:relative;
        left:-15px;
        width:80%;
        border:0;
        border-radius:50px;
        background:#ccc;
        padding:5px;
        padding-left:15px;
    }
    img{
        width:1.3rem;height:1.3rem;
        position:absolute;
        right:80px;top:15px;
    }
    .con{
        width:100%;
        text-align:left;
        margin-left:10px;
        margin-top:1rem;
        border-top:2px solid #ccc;
    }
    .label{
        text-align:left;
        margin-left:10px;
    }
    .label>a{
        display:inline-block;
        text-align:left;
        background:#ccc;
        border:0;
        border-radius:50px;
        padding:5px;
        margin-bottom:5px;
        margin-right:10px;
    }
</style>