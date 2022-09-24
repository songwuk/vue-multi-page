<template>
  <div class="hello">
    <h1 ref="column" class="animate"></h1>
    <!-- <div @click="idTouch">{{id}}</div> -->
  </div>
</template>

<script>
import { UnTyper } from 'untyper'

export default {
  name: 'HelloWorld',
  data() {
    return {
      column: 'hello, songwuk',
    }
  },
  mounted(){
    const arr =[...new Set([20,3,4,1,6,1])]
    const a = arr.sort((a,b) => a-b)
    console.log(a)
    new UnTyper(this.$refs.column,{speed:100,startDelay:1000})
    .type(this.column,{delay:100})
    .go()
  },
  methods: {
    idTouch() {
      // eslint-disable-next-line no-debugger
      // debugger;
      for(let i = 0; i < 1; i++) {
        this.id++
      }
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .animate {
  animation: 1s linear 0s infinite running showin;
}
@keyframes showin {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
} */
</style>
