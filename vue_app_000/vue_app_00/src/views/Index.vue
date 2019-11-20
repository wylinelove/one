// 内容
<template>
    <main>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="tab1">
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">游戏</mt-tab-container-item>
            <mt-tab-container-item id="tab3">消息</mt-tab-container-item>
            <mt-tab-container-item id="tab4">我的</mt-tab-container-item>
        </mt-tab-container>    
        <!-- 底部导航 -->
        <div>
            <foot></foot>
        </div>
    </main>
</template>
<script>
// 1:引入子组件
import Index from "../views/Index"
import Foot from "../views/Foot"
import Titlebar from "../views/Titlebar"
import Flish from "../views/Flish"
import News from "../views/News"
import Heard from "../views/Heard"


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
            selected:"tab1"
        }
    },
    components:{
        "index":Index,
        "foot":Foot,
        "titlebar":Titlebar,
        "flish":Flish,
        "news":News,
        "heard":Heard,
        
    }
}
</script>
<style scoped>
    a{
        text-decoration:none;
        color:#000;
    }
    /* 图标 */  
    /* 背景图暂未解决 */
    #footer{
        width:100%;height:100%;
		/* background-color:#f5f5f5; */
		font-size:12px;
		/* float:left; */
		/* text-align:center; */
        clear:both;
        padding-top:1rem;
       
	}
    #footer div{
        float:left; 
        padding-left:0.8rem;
    }
    /* 图标的图片 */
    #footer div img{
        width:5rem;height:5rem;
        border-radius:50%;
    }
    /* 轮播图 */
    img{
        width:100%; 
    }
    .mint-swipe{
        width:100%;
        height: 238px;
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
    } 
    /* 底部导航 */
    .btm{
        position:relative;
    }
</style>