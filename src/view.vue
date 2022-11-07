<template>
  <div>
    <div ref="text">{{numText}}</div>
    <button @click="tapClick">点击</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numText: 'appViews'
    }
  },
  mounted() {
    this.numText = 'appViews2'
    console.log(this.$refs.text.textContent === 'appViews2')
    this.$nextTick(()=> {
      console.log(this.$refs.text.textContent === 'appViews2')
    })
  },
  methods: {
    tapClick() {
      console.log(1)
    }
  }
}
</script>
