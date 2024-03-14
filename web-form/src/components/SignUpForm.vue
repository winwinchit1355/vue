<template>
    <form>
        <label for="email">Email</label>
        <input type="email" required v-model="email" >

        <label for="password">Password</label>
        <input type="password" required v-model="password" >

        <label for="role">Role</label>
        <select v-model="role">
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="client">Client</option>
        </select>

        <div class="terms">
            <input type="checkbox" v-model="checkbox">
            <label for="checkbox">Accept Terms and Conditions</label>
        </div>

        <button>Register</button>
    </form>
    <p>email: {{ email }}</p>
    <p>password: {{ password }}</p>
    <p>role: {{ role }}</p>
    <p>checkbox: {{ checkbox }}</p>
</template>
<script>
export default {
    data(){
        return {
            email:'',
            password:'',
            role:'designer',
            checkbox:''
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
</style>