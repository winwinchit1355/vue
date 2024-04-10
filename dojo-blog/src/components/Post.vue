<template lang="">
    <div class="post" :id="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ snippet }}</p>
    </div>
</template>
<script>
import { computed } from 'vue';
export default {
    name:'Post',
    props:['post'],
    setup(props){
        const snippet = computed(() => {
            return props.post.body.substring(0,100) + '...';
        });
        return {snippet};
    }
}
</script>
<style lang="">
    
</style>