<template>
    <!-- 点更多出的图标页 -->
    <main>
        <div class="top">
            <span>全部</span>
            <router-link :to="{path:'Wechat'}">
                <img src="../assets/err.png" alt="" style="width:1.3rem;height:1.3rem;" class="top_r">
            </router-link>
        </div>
        <!-- 搜索栏 -->
        <div class="search">
            <input type="text" placeholder="请输入关键词搜索" class="search_in">
        </div>
        <!-- 导航 -->
        <div class="title">
            <span style="text-align:left">游戏</span>
        </div>
        <!-- 图标 -->
        <div class="title_img">
            <a href="#">
                <div>
                    <img src="../assets/lol_logo.jpg" alt="">
                    <p>英雄联盟</p>
                </div>
            </a>
            <a href="#">
                <div>
                    <img src="../assets/wz_logo.jpg" alt="">
                    <p>王者荣耀</p>
                </div>
            </a>
            <a href="#">
                <div>
                    <img src="../assets/my_logo.jpg" alt="">
                    <p>梦幻西游</p>
                </div>
            </a>
            <a href="#">
                <div>
                    <img src="../assets/cf_logo.jpg" alt="">
                    <p>穿越火线</p>
                </div>
            </a>
            <a href="#">
                <div>
                    <img src="../assets/lol_logo.jpg" alt="">
                    <p>英雄联盟</p>
                </div>
            </a>
            <a href="#">
                <div>
                    <img src="../assets/wz_logo.jpg" alt="">
                    <p>王者荣耀</p>
                </div>
            </a>
            <a href="#">
                <div>
                    <img src="../assets/my_logo.jpg" alt="">
                    <p>梦幻西游</p>
                </div>
            </a>
            <a href="#">
                <div>
                    <img src="../assets/cf_logo.jpg" alt="">
                    <p>穿越火线</p>
                </div>
            </a>
            <a href="#">
                <div>
                    <img src="../assets/lol_logo.jpg" alt="">
                    <p>英雄联盟</p>
                </div>
            </a>
            <a href="#">
                <div>
                    <img src="../assets/wz_logo.jpg" alt="">
                    <p>王者荣耀</p>
                </div>
            </a>
            <a href="#">
                <div>
                    <img src="../assets/my_logo.jpg" alt="">
                    <p>梦幻西游</p>
                </div>
            </a>
            <a href="#">
                <div>
                    <img src="../assets/cf_logo.jpg" alt="">
                    <p>穿越火线</p>
                </div>
            </a>
            <a href="#">
                <div>
                    <img src="../assets/lol_logo.jpg" alt="">
                    <p>英雄联盟</p>
                </div>
            </a>
            <a href="#">
                <div>
                    <img src="../assets/wz_logo.jpg" alt="">
                    <p>王者荣耀</p>
                </div>
            </a>
            <a href="#">
                <div>
                    <img src="../assets/my_logo.jpg" alt="">
                    <p>梦幻西游</p>
                </div>
            </a>
            <a href="#">
                <div>
                    <img src="../assets/cf_logo.jpg" alt="">
                    <p>穿越火线</p>
                </div>
            </a>
            <!-- 显示更多 -->
            <div class="more">
                <button class="w-100">显示更多</button>
            </div>
        </div>
        <!-- <foot></foot> -->
    </main>
</template>
<script>
// import Foot from "../views/Foot.vue" 
export default {
    data(){
        return{}
    },
    components:{
        // "foot":Foot
    }
}
</script>
<style scoped>
    a{
        text-decoration:none;
        color:#000;
    }
    .top{
        padding:5px;
        display:flex;
        justify-content: space-between;
        /* font-style:italic;   */
        font-size:24px;
        text-indent:1.2rem;
    }
    .top_r{
        margin:0 10px;
    }
    .search{
        padding:10px;
    }
    .search_in{
        border:0;outline:0;
        padding:0.5rem 1rem;
        border-radius:25px;
        background:#f5f5f5 url("../assets/search.png") no-repeat;
        background-size:5%;
        background-position:320px 10px;
        width:100%;
    }
    .title{
        padding-left:1.8rem;
        width:100%;
        text-align:left;
    }
    .title_img{
        display:flex;
        justify-content: center;
        flex-wrap:wrap;
        width:375px;
    }
    .title_img>a{
        display:block;
        width:22%;height:22%;
        /* background:#ff0; */
        padding-top:1rem;
        margin:0.2rem;
        border:0;
        /* outline:1px solid #000; */
    }
    .title_img>a>div>img{
        border-radius:50%;
        width:3rem;height:3rem;
        margin-left:1rem;
        margin-right:1rem;
    }
    .more{
        width:100%;
        text-align:center;
        margin:0 12px;
    }
    button{
        height:3rem;
        font-size:18px;
        border-radius:5px;
        border:0;
        background:steelblue;
    }
</style>