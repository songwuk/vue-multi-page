<template>
  <div id="app">
    page1
  </div>
</template>

<script>
  import {diff_match_patch as DMP} from 'diff-match-patch'
  export default {
    name: 'App',
    mounted() {
      const input = `
        import { createApp } from 'vue'
        import VueRouter from 'vue-router'
        const app = createApp(app)
      `
      const output = `
        import { createApp } from 'vue'
        const app = createApp(main)
      `
      const diff = new DMP()
      const delta = diff.diff_main(input, output)
      diff.diff_cleanupSemantic(delta)
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
