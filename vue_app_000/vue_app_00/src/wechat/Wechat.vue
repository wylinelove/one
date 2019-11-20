<template>
    <div class="all">
        <!-- <my-header></my-header> -->
        <main>
            <!-- 按钮 推荐关注-->
            <div>
                <!-- <heard></heard> -->
            </div>
            <!-- 首页内容 -->
            <div>
                <!-- <titlebar></titlebar> -->
            </div>
            <div>
                <!-- <flish></flish> -->
            </div>
            <div>
                <!-- <news></news> -->
            </div>
            <!-- 底部切换面板图标 -->
            <div>
                <foot></foot>
            </div>
        </main>        
    </div>
</template>
<script>

import Pag from "../views/Pag.vue"
import Index from "../views/Index.vue"
import Heard from "../views/Heard.vue"
import Foot from "../views/Foot.vue"
import Titlebar from "../views/Titlebar.vue"
import Flish from "../views/Flish.vue"
import News from "../views/News.vue"
import Game from "../views/Pag.vue"

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
                },
            ],
            // 底部导航
            active:"tab1",
        }
    },
    components:{
        "pag":Pag,
        "index":Index,
        "heard":Heard,
        "foot":Foot,
        "titlebar":Titlebar,
        "news":News,
        "flish":Flish,
        "game":Game,
        "game":Game,
    },
    methods:{
    }
}
</script>
<style scoped>
    main{
        margin-top:0rem;
    }
</style>



