<template lang="">
    <div class="post" :id="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
    </div>
</template>
<script>
export default {
    name:'Post',
    props:['post']
}
</script>
<style lang="">
    
</style>