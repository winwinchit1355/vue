<template>
  <div class="nav">
    <div id="nav">
    <RouterLink to="/home">Home</RouterLink> | 
    <RouterLink to="/about">About</RouterLink>
  </div>
  <RouterView />
  </div>
  <!-- <div class="home">
    <p ref="p">My name is {{ name }}. I am {{ age }} years old.</p>
    <button @click="age--">-</button>
    <button @click="age++">+</button>
    <br>
    <input type="text" v-model="name">
    <button @click="handleClick">Click Me</button>
  </div> -->
</template>
<script>
import { ref } from 'vue';
export default{
  name:'Home',
  setup(){
    const name=ref("WWC");
    const age=ref(30);

    const handleClick = () =>{
      name.value = 'Win Win Chit';
      age.value = 55;
    }
    return {name,age,handleClick};
  },
  data(){
    return {
      score: 40,
    }
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
}

</style>
