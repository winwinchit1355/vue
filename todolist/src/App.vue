<template lang="">
  <div class="main">
    <h1>{{title}}</h1>
    <img :src="logoUrl" :alt="logoCaption" width="200" height="200">
    <div>
      <p>You have {{ allTasks }} {{ allTasks > 1 ? 'tasks':'task' }} at the moment. </p>
      <input type="text" placeholder="Add a new task" v-model="newTask" ref="task" autofocus>
      <button @click="addTask" :disabled="newTask.length < 1">Add</button>
    </div>
    <div class="todolists">
      <ul class="lists">
        <li 
        v-for="(task,index) in latest" 
        :key="task.id" 
        :class="[
          task.finished ? 'strikeout':'',
          task.postponed ? 'text-gray':'',
          'simple-class'
        ]"
        @click="finishTask(task.id)"
        >
          {{ index+1 }}. {{ task.name }}
          <div class="delete" v-if="task.finished">
            <button @click="removeTask(task.id)">Delete</button>
          </div>
          <div class="edit" v-else>
            <button @click="editTask(task.id)">Edit</button>
            <button @click="removeTask(task.id)">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      title: 'My To Do App',
      newTask:'',
      logoUrl:'https://static.vecteezy.com/system/resources/previews/000/392/875/original/set-of-company-logo-design-ideas-vector.jpg',
      logoCaption:'A photo by WWC',
      tasks:[
        {id:1,name:'Learn Vue',finished:false,edit:false},
        {id:2,name:'Learn PHP',finished:false ,edit:true},
        {id:3,name:'Learn English',finished:true,edit:true},
      ]
    }
  },
  methods:{
    addTask(){
      if(this.newTask.length < 1) return;
      this.tasks.push({
        id:this.tasks.length+1,
        name:this.newTask,
        finished:false
      });
      this.newTask='';
      this.$refs.task.focus();
    },
    removeTask(id){
      this.tasks = this.tasks.filter(item => item.id != id);
    },
    finishTask(id){
      const task = this.tasks.find(item=>item.id == id);
      task.finished = !task.finished;
    },
    editTask(id){
      const task = this.tasks.find(item=>item.id == id);
      
    }
  },
  computed:{
    allTasks(){
      return this.tasks.length;
    },
    latest(){
      return [...this.tasks].reverse();
    }
  }
}
</script>
<style>

</style>