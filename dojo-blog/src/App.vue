<template>
  <div class="home">
    <p>My name is {{ name }}</p>
    <p>I am {{ age }} years old.</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>
<script>
export default{
  name:'Home',
  setup(){
    console.log('setup');
    let name="WWC";
    let age=30;

    const handleClick = () =>{
      console.log('click me');
    }
    return {name,age,handleClick};
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
