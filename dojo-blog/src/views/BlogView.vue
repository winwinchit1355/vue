<template lang="">
    <div>
        <h1>Blog Page</h1>
        <PostList v-if="showPosts" :posts="posts" />
        <button @click="showPosts = !showPosts">toggle posts</button>
        <button @click="posts.pop()">delete posts</button>
    </div>
</template>
<script>
import { ref } from 'vue';
import PostList from '../components/PostList.vue';
export default {
    name: 'Blog',
    components: { PostList },
    setup() {
        const posts = ref([
            {
                title: 'Welcome to the blog',
                body: 'lorem ispum',
                id: 1
            },
            {
                title: 'Vue Snipness',
                body: 'lorem ispum',
                id: 2
            },
            {
                title: 'React Snipness',
                body: `What are the typical actions we need to perform with permissions?
                        Define the permission, ex. "manage_users"
                        Check the permission on the front-end, ex. show/hide the button
                        Check the permission on the back-end, ex. can/can't update the data
                        So yeah, replace the word "permission" with "gate", and you understand it all.`,
                id: 3
            },
        ]);
        const showPosts = ref(true);
        return { posts,showPosts };
    }
}
</script>
<style lang="">

</style>