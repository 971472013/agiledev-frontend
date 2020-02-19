<template>
  <el-switch
    v-model="value"
    active-text="列表视图">
  </el-switch>
</template>

<script>
// eslint-disable-next-line indent
  /* eslint-disable indent */

  export default {
    name: 'ViewSwitch',
    data () {
      return {
        value: true
      }
    }
  }
</script>

<style scoped>

</style>
