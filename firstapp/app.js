const app = Vue.createApp({
    // template: '<h2>I am the template</h2>'
    data(){
        return {
            title:'The final empire',
            author:'Brandon',
            age:42
        }
    },
    methods:{
        changeTitle(title){
            // this.title = 'change title again';
            this.title = title;
        }
    }
});

app.mount('#app');