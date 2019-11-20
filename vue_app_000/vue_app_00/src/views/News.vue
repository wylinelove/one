<template>
    <main>
        <!-- v-for="item in list" 无限滚动 加入到新闻的子标签 -->
        <div class="media border p-2">
            <div class="media-body">
                <a href="#">
                    <p>S9小组赛战队首发名单公布:IG启用小乐言首发！凝望坐稳替补</p>
                    <p class="p2">英雄联盟</p>
                </a>
            </div>
            <a href="#"><img src="../assets/new1.jpg" alt="" class="" style="width:6rem;height:4rem"/></a>
        </div>
        <div class="media border p-2">
            <div class="media-body">
                <a href="#">
                    <p>S9小组赛战队首发名单公布:IG启用小乐言首发！凝望坐稳替补</p>
                    <p class="p2">英雄联盟</p>
                </a>
            </div>
            <a href="#"><img src="../assets/new2.jpg" alt="" class="" style="width:6rem;height:4rem"/></a>
        </div>
        <div class="media border p-2">
            <div class="media-body">
                <a href="#">
                    <p>S9小组赛战队首发名单公布:IG启用小乐言首发！凝望坐稳替补</p>
                    <p class="p2">英雄联盟</p>
                </a>
            </div>
            <a href="#"><img src="../assets/new3.jpg" alt="" class="" style="width:6rem;height:4rem"/></a>
        </div>
        <div class="media border p-2">
            <div class="media-body">
                <a href="#">
                    <p>S9小组赛战队首发名单公布:IG启用小乐言首发！凝望坐稳替补</p>
                    <p class="p2">英雄联盟</p>
                </a>
            </div>
            <a href="#"><img src="../assets/new4.jpg" alt="" class="" style="width:6rem;height:4rem"/></a>
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style scoped>
    main{
        margin-bottom:3rem;
    }
    a{
        text-decoration: none;
        color:#000;
    }
    /* 新闻 */
    .media{
        width:100%;
        font-size:16px;
        font-weight:400;
    }
    .media-body>a>p{
        text-align:left;
        margin-bottom:0;
    }
    /* 新闻类型 */
    .p2{
        font-size:5px;
        color:#ccc;
        text-align:bottom;
    } 
</style>