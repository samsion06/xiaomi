import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

/**
 * <router-view></router-view>的作用就是渲染这里的子路由children
 * 每一级children都需要一个router-view来向匹配
 * app.vue里面的<router-view>是渲染这里的第一级路由
 * 同时加载父路由和自路由的组件
 */

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue'), //加载home.vue
    redirect: '/index', //重定向到子路由
    children: [{
        path: '/index',
        name: 'index',
        component: () => import('../views/index.vue'),
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/detail.vue')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import( /* webpackChunkName: "about" */ '../views/detail.vue')
      },
    ]
  },

  {
    path: '/test',
    name: 'test',
    component: () => import( /* webpackChunkName: "about" */ '../views/test.vue')
  }
  // {
  //   path: '/cart',
  //   name: 'cart',
  //   component: () => import( /* webpackChunkName: "about" */ '../views/prd.vue')
  // },
  // {
  //   path: '/order',
  //   name: 'order',
  //   component: () => import( /* webpackChunkName: "about" */ '../views/index.vue'),
  //   children:[
  //     {
  //       path:'/list',
  //       name:'list',
  //       component: () => import( /* webpackChunkName: "about" */ '../views/index.vue'),
  //     },
  //     {
  //       path:'/confirm',
  //       name:'confirm',
  //       component: () => import( /* webpackChunkName: "about" */ '../views/index.vue'),
  //     },
  //     {
  //       path:'/pay',
  //       name:'pay',
  //       component: () => import( /* webpackChunkName: "about" */ '../views/index.vue'),
  //     },
  //   ]
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router