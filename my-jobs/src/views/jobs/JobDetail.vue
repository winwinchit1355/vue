<template lang="">
    <div>
        <h1>Job Detail</h1>
        <p>This job id is {{ id }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    }
}
</script>
<style lang="">
    
</style>