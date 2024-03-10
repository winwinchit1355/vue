<template lang="">
  <div>
    <h1>{{title}}}</h1>
  </div>
</template>
<script>
export default {
  data(){
    return {
      title: 'My To Do App',
      tasks:[
        {id:1,name:'Learn Vue',finished:false},
        {id:2,name:'Learn PHP',finished:false},
        {id:3,name:'Learn English',finished:true},
      ]
    }
  }
}
</script>
<style lang="">
  
</style>