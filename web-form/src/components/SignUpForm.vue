<template>
    <form @submit="handleSubmit">
        <div class="email">
            <label for="email">Email</label>
            <input type="email" required v-model="email" >
        </div>
    
        <div class="password">
            <label for="password">Password</label>
            <input type="password" required v-model="password" >
            <span class="error-msg" v-if="passwordErr">{{ passwordErr }}</span>
        </div>
    
        <div class="role">
            <label for="role">Role</label>
            <select v-model="role">
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="client">Client</option>
            </select>
        </div>

        <div class="terms">
            <input type="checkbox" v-model="terms">
            <label for="terms">Accept Terms and Conditions</label>
        </div>

        <label for="tempSkill">Skills</label>
        <input type="text" v-model="tempSkill" @keyup.alt="addSkill" >

        <div v-for="skill in skills" :key="skill" class="pill">
            <span @click="deleteSkill(skill)">{{ skill }}</span>
        </div>
        <div class="submit">
            <button >Register</button>
        </div>
    </form>
    <p>email: {{ email }}</p>
    <p>password: {{ password }}</p>
    <p>role: {{ role }}</p>
    <p>terms: {{ terms }}</p>
</template>
<script>
export default {
    data(){
        return {
            email:'',
            password:'',
            role:'designer',
            terms:'',
            names:[],
            tempSkill:'',
            skills:[],
            passwordErr:''
        }
    },
    methods:{
        addSkill(e){
            if(e.key === ',' && this.tempSkill)
            {
                if(!this.skills.includes(this.tempSkill))
                {
                    this.skills.push(this.tempSkill);
                }
                this.tempSkill = '';
            }
        },
        deleteSkill(skill){
            this.skills = this.skills.filter((item)=>{
                return item !== skill;
            })
        },
        handleSubmit(e){
            e.preventDefault();
            this.passwordErr = this.password.length < 5 ? 'Password must be at lease 5 words.':'';
        }
    }
}
</script>
<style>
    form{
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    label{
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }

    input,select{
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
        transition: border-color 0.3s;
        
    }
    input:focus,select:focus{
        outline: none;
    }
    button{
        background: blue;
        height: 35px;
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        font-size: 1.1em;
        margin-top: 30px;
        margin-bottom: 10px;
        transition: all 0.30s ease-in-out;
    }
    button:hover{
        background: rgb(124, 124, 217);
    }
    input[type="checkbox"]{
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }
    .pill{
        display: inline-block;
        margin: 20px 10px 0 0;
        padding:6px 12px;
        background: #eee;
        border-radius: 20px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
        cursor: pointer;
    }
    .error{
        color: red;
        font-size: 11px;
    }
</style>