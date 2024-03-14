<template>
  <h1>Hello Testing</h1>
  
  <button @click="start"  :disabled="isPlaying" >Play</button>
  <Results v-if="score" :score="score" />
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
</template>
<script>
import Results from './components/Results.vue';
import Block from './components/Block.vue'
export default{
  name: 'App',
  components: {Block,Results},
  data(){
    return {
      isPlaying: false,
      delay:null,
      score:null
    }
  },
  methods:{
    start(){
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
    },
    endGame(reactionTime){
      this.score = reactionTime;
      this.isPlaying = false;
    }
  }
}
</script>
<style scoped>

</style>
