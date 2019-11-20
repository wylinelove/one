<template>
    <div>
       <mt-tab-container v-model="selected">
            <mt-tab-container-item id="tab1">
                <div class="head">
                    <heard></heard>
                </div>
                <!-- 图标导航 -->
                <div>
                    <titlebar></titlebar>
                </div>
                <!-- 轮播图  -->
                <div>
                    <flish></flish>
                </div>
                 <!-- 新闻  -->
                <div>
                    <news></news>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                <div>
                    <pag></pag>
                </div>
            </mt-tab-container-item>
             <mt-tab-container-item id="tab3">
                <div>
                    <word></word>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab4">
                <div>
                    <my></my>
                </div>
            </mt-tab-container-item> 
        </mt-tab-container> 
    <mt-tabbar v-model="selected" fixed>
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
    </div>
</template>
<script>
import Titlebar from "../views/Titlebar"
import Flish from "../views/Flish"
import News from "../views/News"
import Heard from "../views/Heard"
import Pag from "../views/Pag"
import Word from "../views/Word"
import My from "../views/My"
export default {
    data(){
        return{
            selected:"tab1"
        }
    },
    components:{
        "titlebar":Titlebar,
        "flish":Flish,
        "news":News,
        "heard":Heard,
        "pag":Pag,
        "word":Word,
        "my":My
    }
}
</script>
<style scoped>
    mt-tabbar{
        width:100%;
    }
    .head{
        background:url("../assets/bg.jpg");
    }
    .btm{
        position:relative;
    }
    /* 底部导航文字 */
     /* 1.修改tabbar中默认和选中文字 */
    /* 文字颜色 */
    /* 默认文字颜色 */
    .mint-tabbar > .mint-tab-item{
        color:#999;
    }
    /* 选中的文字的颜色 */
    .mint-tabbar > .mint-tab-item.is-selected{
        background-color:transparent;
        color:#45c018;
    }
</style>