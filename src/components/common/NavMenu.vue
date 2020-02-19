<template>
  <el-menu
    :default-active="'/index'"
    router
    mode="horizontal"
    background-color="white"
    text-color="#222"
    active-text-color="red"
    style="min-width: 1300px">
    <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
      {{ item.navItem }}
    </el-menu-item>
    <i class="el-icon-switch-button" v-on:click="logout" style="float:right;font-size: 40px;color: #222;padding: 10px"></i>
    <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">NJU Jotter - Your Mind Palace</span>
    <el-input
      placeholder="快速搜索..."
      prefix-icon="el-icon-search"
      size="medium"
      style="width: 300px;position:absolute;margin-top: 12px;right: 18%"
      v-model="keywords">
    </el-input>
    <a></a>
  </el-menu>
</template>

<script>
// eslint-disable-next-line indent
  /* eslint-disable indent */

  import {createRouter} from '../../router'

export default {
    name: 'NavMenu',
    data () {
      return {
        navList: [
          {name: '/index', navItem: '首页'},
          {name: '/jotter', navItem: '笔记本'},
          {name: '/library', navItem: '图书馆'},
          {name: '/admin/dashboard', navItem: '管理中心'}
        ],
        keywords: '',
        path: ''
      }
    },
    mounted: function () {
      // 获得第一级路由，以设置导航栏高亮
      var x = this.$route.path.indexOf('/', 1)
      if (x !== -1) {
        this.path = this.$route.path.substring(0, x)
      } else {
        this.path = this.$route.path
      }
    },
    computed: {
      hoverBackground () {
        return '#ffd04b'
      }
    },
    methods: {
      logout () {
        var _this = this
        this.$axios.get('/logout').then(resp => {
          if (resp.data.code === 200) {
            // 前后端状态保持一致
            _this.$store.commit('logout')
            _this.$router.replace('/login')
            // 清空路由，防止路由重复加载
            const newRouter = createRouter()
            _this.$router.matcher = newRouter.matcher
          }
        }).catch(failResponse => {})
      }
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
</style>
