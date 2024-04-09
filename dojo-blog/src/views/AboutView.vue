<template lang="">
    <div>
        <h1>About Us</h1>
        <input type="text" v-model="search">
        <p>search for - {{ search }}</p>
        <div v-for="name in matchingNames" :key="name">
            <h4>My name is {{ name }}</h4>
        </div>
        <button @click="handleClick">Stop Watch</button>
    </div>
</template>
<script>
import { computed, ref, watch, watchEffect } from 'vue';
export default {
    name: 'About',
    setup(){
        const search = ref('');
        const names = ref(['mario','john','crystal','aye mya','david','dom']);
        const stopWatch = watch(search,() =>{
            console.log('watch run');
        });
        const stopEffect = watchEffect(()=>{
            console.log('watchEffect fun run',search.value);
        })
        const matchingNames = computed(()=>{
            return names.value.filter((name)=>name.includes(search.value));
        });
        const handleClick = () =>{
            stopWatch();
            stopEffect();
        }

        return {names,search,matchingNames, handleClick};
    }
}
</script>
<style lang="">
    
</style>