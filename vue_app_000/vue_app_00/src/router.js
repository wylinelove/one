import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

// 引入Wechat.vue   首页
import Wechat from "./wechat/Wechat.vue"
// 首页头部
import Heard from "./views/Heard.vue"
import Exam01 from "./wechat/Exam01.vue"
import Exam02 from "./wechat/Exam02.vue"
// 游戏板块
import Pag from "./views/Pag.vue"
// 消息板块
import Word from "./views/Word.vue"
// 首页内容
import Index from "./views/Index.vue"
// 我的板块
import My from "./views/My.vue"
// 脚部切换板块
import Foot from "./views/Foot.vue"
// 登录
import Login from "./components/Login.vue"
// 注册
import Register from "./components/Register.vue"
// 首页标题
import Titlebar from "./views/Titlebar.vue"
import Ppp from "./views/Ppp.vue"
import Titlebars from "./views/Titlebars.vue"
import Lianxi from "./views/Lianxi.vue"
import Search from "./views/Search.vue"
import Textnav from "./views/Textnav.vue"
import Ping from "./views/Ping.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/Ping',component:Ping},
    {path:'/Search',component:Search},
    {path:'/Textnav',component:Textnav},
    {path:'/Lianxi',component:Lianxi},
    {path:'/Titlebars',component:Titlebars},
    {path:'/Ppp',component:Ppp},
    {path:'/Titlebar',component:Titlebar},
    {path:'/Register',component:Register},
    {path:'/Login',component:Login},
    {path:'/Foot',component:Foot},
    {path:'/Heard',component:Heard},
    {path:'/My',component:My},
    {path:'/Index',component:Index},
    {path:'/Word',component:Word},
    {path:'/Pag',component:Pag},
    {path:'/Exam02',component:Exam02},
    {path:'/Exam01',component:Exam01},
    {path:'/Wechat',component:Wechat},
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
