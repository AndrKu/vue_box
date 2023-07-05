<template>
       <div>
    <h3>Список пользователей</h3>
    
    <!-- postPropsElement название элемента в дочернем компоненте -->
    <post-item
        v-for="post in posts"
        :post="post" 
        :key="post.id"
        @remove-post="$emit('remove-post', post)"
     > 
    </post-item>
    

    </div>

</template>

<script>
import PostItem from './PostItem.vue';

    export default {
        components: { PostItem },
      
        emits: ['remove-post'],
        props: {
            posts: Array,
            required: true,
        }
    }
    
</script>

<style scoped>

</style>