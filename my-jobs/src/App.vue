<template>
  <div id="nav">
    <RouterLink :to="{name:'Home'}">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/jobs">Jobs</RouterLink>
  </div>
  <button @click="redirect">Redirect</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Forward</button>
  <RouterView />
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  methods:{
    redirect(){
      this.$router.push({name:'Home'});
    },
    back(){
      this.$router.go(-1);
    },
    forward(){
      this.$router.go(1);
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
  margin-top: 60px;
}
#nav{
  padding: 30px;
  box-sizing: border-box;
}
#nav a{
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px 0 0;
  padding: 0 10px 0 0;
}
#nav a:not(:last-child){
  border-right: 1px solid black;
}
#nav a.router-link-exact-active{
  color: #42b983;
}
button{
  margin: 0 10px;
  padding:10px;
  border:none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
