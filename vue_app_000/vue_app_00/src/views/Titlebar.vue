<template>
    <main>  
        <div id="bg">
            <div id="footer">
                <router-link :to="{path:'Textnav'}">
                    <div>
                        <img src="../assets/lol_logo.jpg" alt="">
                        <p>英雄联盟</p>
                    </div>
                </router-link>
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
                <router-link :to="{path:'Titlebars'}" >
                    <div>
                        <img src="../assets/about_logo.jpg" alt="">
                        <p>更多</p>
                    </div>
                </router-link>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data(){
        return{

        }
    },
}
</script>
<style scoped>
    a{
        text-decoration:none;
        color:#000;
        display:block;
    }
    /* 图标 */  
    /* 背景图暂未解决 */
    #bg{
        background:url("../assets/bg.jpg") no-repeat 0% 20%;
        position:relative;
        width:100%;
    }
    #footer{
        display:flex;
        justify-content: space-around;
        position:relative;
        background:rgba(255,255,255,0.6);
        padding-top:1rem;
    }
    img{
        border-radius:50%;
        width:3.5rem;height:3.5rem;
    }
    
</style>