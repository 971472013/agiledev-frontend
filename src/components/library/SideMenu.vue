<template>
  <el-menu
    class="categories"
    default-active="0"
    @select="handleSelect"
    active-text-color="red">
    <el-menu-item index="0">
      <i class="el-icon-menu"></i>
      <span slot="title">全部</span>
    </el-menu-item>
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">小说</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">言情</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <span slot="title">历史</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-menu"></i>
      <span slot="title">教育</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-menu"></i>
      <span slot="title">旅行</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-menu"></i>
      <span slot="title">散文</span>
    </el-menu-item>
    <el-menu-item index="7">
      <i class="el-icon-menu"></i>
      <span slot="title">哲学</span>
    </el-menu-item>
    <el-menu-item index="8">
      <i class="el-icon-menu"></i>
      <span slot="title">旅行</span>
    </el-menu-item>
    <el-menu-item index="9">
      <i class="el-icon-menu"></i>
      <span slot="title">美食</span>
    </el-menu-item>
    <el-menu-item index="10">
      <i class="el-icon-menu"></i>
      <span slot="title">商业</span>
    </el-menu-item>
    <el-menu-item index="11">
      <i class="el-icon-menu"></i>
      <span slot="title">编程</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
// eslint-disable-next-line indent
  /* eslint-disable indent */

  export default {
    name: 'SideMenu',
    data () {
      return {
        cid: ''
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        this.cid = key
        this.$emit('indexSelect')
      }
    }
  }
</script>

<style scoped>
  .categories {
    position: fixed;
    margin-left: 50%;
    left: -600px;
    top: 100px;
    width: 150px;
  }
</style>
