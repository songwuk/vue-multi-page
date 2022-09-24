<template>
  <div id="app">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'App2',
  components: {
    HelloWorld
  },
  mounted() {
    console.log(process.env)
  }
}
</script>

<style>
#app2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
