const app = Vue.createApp({
    // template: '<h2>I am the template</h2>'
    data(){
        return {
            showBook:true,
            url: 'https://www.google.com/',
            books:[
                {title:'name of the wind',author:'patrick rock',feature_image:'assets/images/book1.jpeg',is_favorite:true},
                {title:'the way of king',author:'JOhin',feature_image:'assets/images/book2.jpeg',is_favorite:false},
                {title:'book3',author:'author3',feature_image:'assets/images/book3.jpeg',is_favorite:false},
            ],
            title:'The final empire',
            author:'Brandon',
            age:42,
            x:0,
            y:0
        }
    },
    methods:{
        changeTitle(title){
            // this.title = 'change title again';
            this.title = title;
        },
        toggleShowBooks(){
            this.showBook = !this.showBook;
        },
        handleEvent(e,data){
            console.log(e,e.type);
            if(data){
                console.log(data);
            }
        },
        handleMouseMove(e){
            this.x=e.offsetX;
            this.y=e.offsetY;
        },
        toggleFav(book){
            book.is_favorite = ! book.is_favorite;
        }
    },
    computed:{
        filterBooks(){
            return this.books.filter((book)=>book.is_favorite)
        }
    }
});

app.mount('#app');