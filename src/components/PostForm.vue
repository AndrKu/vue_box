<template>
    
    <form @submit.prevent>
        <my-input v-model="post.title" type="text" placeholder="название">
         </my-input>
        <my-input v-model="post.body" type="text" placeholder="тело поста">
         </my-input>
        <my-btn  @click="addPost">
          Создать
        </my-btn>
        
    </form>

</template>

<script>
import MyBtn from './UI/MyBtn';
import MyInput from './UI/MyInput';

    export default {
        components: { MyBtn, MyInput },
    data() {
        return {
            post: {
                title: "",
                body: ""
            }
        };
    },
    methods: {
        addPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: ""
            };
        }
    },
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

</style>
