<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="back">Go Back</button>
    <h2>Refs</h2>
    <p>{{ data.name }} - {{ data.age }}</p>
    <button @click="updateData">Update Data</button>
    <h2>Reactive</h2>
    <p>{{ reactiveData.name }} - {{ reactiveData.age }} - {{ nameTest }}</p>
    <button @click="updateReactive">Update Reactive</button>
  </div>
</template>

<script>
import { ref,reactive } from 'vue';
export default {
  name: 'HomeView',
  setup(){
    const data = ref({name:'wwc',age:22});
    const reactiveData = reactive({name:'ayage',age:34});

    // test reactive with primitive value 
    const nameTest = ref('aa');
    const updateData = () =>{
      data.value.age = 40;
    }
    const updateReactive = () =>{
      reactiveData.age = 55;
      nameTest.value = 'bb';
    }
    return {data,updateData,reactiveData,updateReactive};
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
}
</script>
