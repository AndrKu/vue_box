<template>
       <div>
    <h3>Список пользователей</h3>
    <!-- postPropsElement название элемента в дочернем компоненте -->
    <post-item
        v-for="post in posts"
        :postPropsElement="post" 
        :key="post.id"
        @remove="$emit('remove', post)"
     /> 
    </div>
     <div>
        <h3>Нету элемента</h3>
     </div>

</template>

<script>

import PostItem from './PostItem.vue';
    export default {
        components: { PostItem },
        props: {
            posts: Array,
            required: true
        }
    }
    
</script>

<style scoped>

</style>