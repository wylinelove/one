<template>
    <!-- 按钮 推荐关注-->
    <main>
        <div class="top">
            <span>
                推荐
            </span> 
            <div>
                <a class="top_r" href="javascript:;"><img src="../assets/scan.png" alt="" style="width:1.4rem;height:1.4rem;"></a>
                <router-link :to="{path:'Search'}" class="top_r" href="javascript:;">
                    <img src="../assets/search.png" alt="" style="width:1.4rem;height:1.4rem;">
                </router-link>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>
<style scoped>
    main{
        background:url("../assets/bg.jpg") no-repeat top 20% 20%;
    }
    a{
        text-decoration:none;
        color:#000;
    }
    .top{
        border-bottom:1px solid #ccc;
        display:flex;
        justify-content: space-between;
        height:3rem;
        line-height: 3rem;
        background:rgba(255,255,255,0.6);
        /* font-style:italic;   */
        font-size:20px;
        text-indent:1.2rem;
    }
    .top_r{
        margin:0 10px;
    }
    
</style>