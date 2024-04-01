<template>
  <div class="home">
    <p ref="p">My name is {{ name }}. I am {{ age }} years old.</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>
<script>
import { ref } from 'vue';
export default{
  name:'Home',
  setup(){
    console.log('setup');
    let name="WWC";
    let age=30;
    const p = ref(null);
    console.log(p,p.value);

    const handleClick = () =>{
      console.log(p,p.value);
      p.value.classList.add('test');
      p.value.textContent = 'hello world';
    }
    return {name,age,handleClick,p};
  },
  data(){
    return {
      age: 40,
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
