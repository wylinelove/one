<template>
    <main>
        <!-- 轮播图 -->
        <div id="home">
            <mt-swipe :auto="4000" :speed="1500">
                <mt-swipe-item v-for="(item,index) in imgs" :key="index">
                    <img :src="item.src" class="img">
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </main>
</template>
<script>
export default {
    name:"home",
    data(){
        return{
            imgs:[
                {
                    index:1,
                    src:require("../assets/111.jpg")
                },
                {
                    index:2,
                    src:require("../assets/222.jpg")
                },
                {
                    index:3,
                    src:require("../assets/333.jpg")
                },
                {
                    index:4,
                    src:require("../assets/444.jpg")
                },
                {
                    index:5,
                    src:require("../assets/555.jpg")
                }
            ],
            active:"tab1"
        }
    }
}
</script>
<style scoped>
     /* 轮播图 */
    #home{
        width:100%;height:200px;
    }
    .img{
        width:100%; height:100%;
    }
    .mint-swipe{
        width:100%;
    }
</style>