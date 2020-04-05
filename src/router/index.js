/* eslint-disable key-spacing,spaced-comment,indent */
import Vue from 'vue'
import Router from 'vue-router'
// import AppIndex from '../components/home/AppIndex'
import HomePage from '../components/home/HomePage'
import Login from '../components/Login'
import Home from '../components/Home'
import Library from '../components/library/Library'
import Register from '../components/Register'
// import Articles from '../components/jotter/Articles'
import Editor from '../components/admin/content/ArticleEditor'
// import ArticleDetails from '../components/jotter/ArticleDetails'
import AdminIndex from '../components/admin/AdminIndex'
import DashBoard from '../components/admin/dashboard/admin/index'

Vue.use(Router)

export default new Router({
  //mode : 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
     // home页面不需要被访问
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'HomePage',
          component: HomePage,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: Library,
          meta: {
            requireAuth: true
          }
        },
        // {
        //   path: '/jotter',
        //   name: 'Jotter',
        //   component: Articles,
        //   meta: {
        //     requireAuth: true
        //   }
        // },
        // {
        //   path:'/jotter/article',
        //   name:'Article',
        //   component:ArticleDetails
        // },
        {
          path: '/admin/content/editor',
          name: 'Editor',
          component: Editor,
          meta: {
            requireAuth: true
          }
        }
        ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminIndex,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/admin/dashboard',
          name: 'dashboard',
          component: DashBoard,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/',
      name: 'Origin',
      redirect: '/login'
    }
  ]
})

//用于创建默认路由
// export const createRouter = routes => new Router({
//   mode : 'history',
//   routes: [
//     {
//       path: '/home',
//       name: 'Home',
//       component: Home,
//       // home页面不需要被访问
//       redirect: '/index',
//       children: [
//         {
//           path: '/index',
//           name: 'HomePage',
//           component: HomePage,
//           meta: {
//             requireAuth: true
//           }
//         },
//         {
//           path: '/library',
//           name: 'Library',
//           component: Library,
//           meta: {
//             requireAuth: true
//           }
//         },
//         // {
//         //   path: '/jotter',
//         //   name: 'Jotter',
//         //   component: Articles,
//         //   meta: {
//         //     requireAuth: true
//         //   }
//         // },
//         // {
//         //   path:'/jotter/article',
//         //   name:'Article',
//         //   component:ArticleDetails
//         // },
//         {
//           path: '/admin/content/editor',
//           name: 'Editor',
//           component: Editor,
//           meta: {
//             requireAuth: true
//           }
//         }
//       ]
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/register',
//       name: 'Register',
//       component: Register
//     },
//     {
//       path: '/admin',
//       name: 'Admin',
//       component: AdminIndex,
//       meta: {
//         requireAuth: true
//       },
//       children: [
//         {
//           path: '/admin/dashboard',
//           name: 'dashboard',
//           component: DashBoard,
//           meta: {
//             requireAuth: true
//           }
//         }
//       ]
//     },
//     {
//       path: '/',
//       name: 'Origin',
//       redirect: '/login'
//     }
//   ]
// })
