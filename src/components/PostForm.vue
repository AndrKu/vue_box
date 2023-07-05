<template>
    
    <form class="form-post" @submit.prevent>
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
    export default {
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
.form-post {
    display: flex;
    flex-direction: column;
}

</style>
