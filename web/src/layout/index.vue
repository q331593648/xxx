<template>
  <el-container>
    <el-aside width="200px">
      <base-aside></base-aside>
    </el-aside>
    <el-container>
      <el-header>
        <base-header></base-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  const path = require('path')
  const files = require.context('./components', false, /\.vue$/)
  const modules = {}
  files.keys().forEach(key => {
    const name = path.basename(key, '.vue')
    modules[name] = files(key).default || files(key)
  })
  export default {
    name: 'baseLayout',
    data() {
      return {}
    },
    components: modules
  }
</script>

<style lang="scss">
  aside {
    height: 100vh;
  }
</style>
