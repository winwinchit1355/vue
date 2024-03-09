<template>
  <h1>Hello Testing</h1>
  <button @click="start">Play</button>
  <Block v-if="isPlaying"/>
</template>
<script>
import Block from './components/Block.vue'
export default{
  name: 'App',
  components: {Block},
  data(){
    return {
      isPlaying: false,
      delay:null,
    }
  },
  methods:{
    start(){
      this.delay = 2000 + Math.random() * 5000;
      console.log(this.delay);
      this.isPlaying = !this.isPlaying;
    }
  }
}
</script>
<style scoped>

</style>
