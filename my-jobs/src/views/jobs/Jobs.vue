<template>
    <h1>Jobs</h1>
    <div class="jobs">
        <div v-for="job in jobs" :key="job.id">
            <router-link :to="{name: 'JobDetail',params:{id:job.id}}">
                <h2>{{ job.title }}</h2>
            </router-link>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            jobs:[
            {id:1,title:'Web Developer',details:'Html,css,javascript'},
            {id:2,title:'Web Designer',details:'Photoshop,figma'},
            {id:3,title:'Manager',details:'managment'},
        ]
        }
    }
}
</script>
<style>
    .jobs div h2{
        background: #f4f4f4;
        padding: 20px;
        max-width: 600px;
        border-radius: 20px;
        margin: 10px auto;
        color: #444;
        cursor: pointer;
    }
    .jobs div h2:hover{
        color: #ddd;
    }
    .jobs div a{
        text-decoration: none;
    }
</style>