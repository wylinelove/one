<template>
    <main>
        <!-- 头部 -->
        <my-header></my-header>
        <div class="media border p-2">
            <img  style="width:5rem;height:5rem;border-radius:50%;" src="../assets/tou.jpg" alt=""/>
            <div class="media-body">
                <h5 class="name">闪闪亮亮
                    <img src="../assets/boy.png" style="width:1.3rem;height:1.3rem" alt="">
                </h5>
                <br>
                <p>
                    <a href="#">查看个人主页和编辑资料</a>
                </p> 
            </div>
            <a href="#" class="next">
                <img src="../assets/next.png" style="width:1.5rem;height:1.5rem" alt="">
            </a>
        </div>
        <mt-navbar id="zhongbu" style="border-bottom:0px;">
            <mt-tab-item>
                <a href="javascript:;">
                  <div class="sumber">1</div>
                  <div class="sum_titl">关注</div>
                </a>
            </mt-tab-item>
            <mt-tab-item>
                <a href="javascript:;">
                  <div class="sumber">2</div>
                  <div class="sum_titl">粉丝</div>
                </a>
            </mt-tab-item>
            <mt-tab-item>
                <a href="javascript:;">
                  <div class="sumber">1</div>
                  <div class="sum_titl">游戏</div>
                </a>
            </mt-tab-item>
            <mt-tab-item>
                <a href="javascript:;">
                  <div class="sumber">1</div>
                  <div class="sum_titl">帖子</div>
                </a>
            </mt-tab-item>
        </mt-navbar>
        <div id="dianji">
            <mt-cell title="我的收藏"  to="javascript:;" is-link>
            <img slot="icon" src="../assets/xingxing_logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="浏览历史"  to="javascript:;" is-link>
            <img slot="icon" src="../assets/shizhong.png" width="24" height="24">
            </mt-cell>
        </div>
        <button @click="loog">退出登录</button>
    </main>
</template>
<script>
export default {
    data(){
        return {   }
    },
    methods:{
        quit(){
            window:close();
        },
        loog(){
            this.$router.push("/Login")
        }
    }
}
</script>
<style  scoped>
    *{margin: 0; padding: 0;}
    main{
        margin-top:0.2rem;
        width:100%;
    }
    a{
        text-decoration: none;
        color:#000;
    }
    .name{
        padding-top:15px;
        padding-left:10px;
        text-align:left;
    }
    .media-body>p{
        font-size:12px;
        padding-bottom:10px;
        padding-left:10px;
        text-align:left;
    }
    .next{
        display:block;
        width:1.4rem;height:1.4rem;
        line-height:5.4rem;
        padding-right:2rem;
    }
    .sumber{
        font-size:1.5rem;
        margin-bottom:0.5rem;
    }
    .sum_titl{
        font-size:0.8rem;
    }
    #dianji {
        text-align: left;
    }
    button{
        width:100%;
        line-height:3rem;
        border-radius:5px;
        background:lightskyblue;
        color:#f5f5f5;
        position:fixed;
        left:0;
        bottom:4rem;
    }

</style>