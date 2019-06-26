// import Vue from 'vue'
// import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import { getStorageToekn, getRunFilePath, setBodyBg } from '@/utils/tools'

// public
import PublicMain from './components/public-main'

// Vue.use(VueRouter)

const basePath = getRunFilePath();
const VRouter = new VueRouter({
  mode: 'hash',
  base: basePath,
  routes: [
    {
      path: '/login',
      name: '用户登录',
      meta: {
        requireAuth: false
      },
      component: () => import(/* webpackChunkName: "group-login" */'@/views/login/index')
    },
    {
      path: '/el',
      name: 'element-ui测试修改UI',
      meta: {
        requireAuth: false
      },
      component: () => import(/* webpackChunkName: "group-login" */'@/views/element/index')
    },
    {
      path: '/main',
      component: PublicMain,
      children: [
        {
          path: 'index',
          name: '后台首页',
          meta: {
            requireAuth: true
          },
          component: () => import(/* webpackChunkName: "group-main-index" */'@/views/main/index/index')
        },
        {
          path: 'setTask',
          name: '添加任务',
          meta: {
            requireAuth: true
          },
          component: () => import(/* webpackChunkName: "group-main-setTask" */'@/views/main/setTask/index')
        },
        {
          path: 'edit_word',
          name: '内容编辑',
          meta: {
            requireAuth: true
          },
          component: () => import(/* webpackChunkName: "group-main-index" */'@/views/main/edit_word/index')
        },
        {
          path: 'lecture_editor',
          name: '讲座列表',
          meta: {
            requireAuth: true
          },
          component: () => import(/* webpackChunkName: "group-main-index" */'@/views/main/lecture_editor/index')
        },
        {
          path: 'lecture_editor_form',
          name: '讲座编辑',
          meta: {
            requireAuth: true
          },
          component: () => import(/* webpackChunkName: "group-main-index" */'@/views/main/lecture_editor/form')
        },{
          path: 'add_article',
          name: '添加文章',
          meta: {
            requireAuth: true
          },
          component: () => import(/* webpackChunkName: "group-main-add_article" */'@/views/main/add_article/index')
        },{
          path: 'management_article',
          name: '文章管理',
          meta: {
            requireAuth: true
          },
          component: () => import(/* webpackChunkName: "group-main-management_article" */'@/views/main/management_article/index')
        },{
          path: 'management_lable',
          name: '标签管理',
          meta: {
            requireAuth: true
          },
          component: () => import(/* webpackChunkName: "group-main-management_lable" */'@/views/main/management_lable/index')
        }
      ]
    },
    {
      path: '*',
      name: '未找到页面',
      meta: {
        requireAuth: false
      },
      component: () => import(/* webpackChunkName: "group-404" */'@c/404')
    }
  ]
})




VRouter.beforeEach((to, from, next) => {

  let token = getStorageToekn();
  let isAuth = to.meta.requireAuth;

  if(!token && isAuth){
    next('/login')
  }

  // 加载开始
  NProgress.start();
  if (to.name) {
    document.title = to.name;
  }
  next();
  // 设置背景
  if(to.path !== '/login'){
    setBodyBg('global-bg3');
  }else{
    setBodyBg('global-bg1');
  }
})

VRouter.afterEach((to, from) => {
  NProgress.done();
})

export default VRouter