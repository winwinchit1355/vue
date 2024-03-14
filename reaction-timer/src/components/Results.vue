<template lang="">
    <div>
        <p >Reaction Time : {{ score }} ms</p>
        <p class="rank">{{ rank }}</p>
    </div>
</template>
<script>
export default {
    props:['score'],
    data(){
        return {
            rank:null,
        }
    },
    mounted(){
        console.log('mounted')
        if(this.score < 250)
        {
            this.rank = 'Fail';
        }else{
            this.rank = 'Success';
        }
    }
}
</script>
<style>
    .rank{
        font-size: 1.4em;
        color: green;
        font-weight: bold;
    }
</style>