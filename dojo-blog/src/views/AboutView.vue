<template lang="">
    <div>
        <h1>About Us</h1>
        <input type="text" v-model="search">
        <p>search for - {{ search }}</p>
        <div v-for="name in matchingNames" :key="name">
            <h4>My name is {{ name }}</h4>
        </div>
    </div>
</template>
<script>
import { computed, ref } from 'vue';
export default {
    name: 'About',
    setup(){
        const search = ref('');
        const names = ref(['mario','john','crystal','aye mya','david','dom']);
        const matchingNames = computed(()=>{
            return names.value.filter((name)=>name.includes(search.value));
        });
        return {names,search,matchingNames};
    }
}
</script>
<style lang="">
    
</style>