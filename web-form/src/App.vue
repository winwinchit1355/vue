<template>
  <h1>Sign Up</h1>
  <SignUpForm />
</template>

<script>

import SignUpForm from './components/SignUpForm.vue'

export default {
  name: 'App',
  components: {
  SignUpForm
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
body{
  margin: 0;
  padding: 0;
  background: #ccc;
}
</style>
