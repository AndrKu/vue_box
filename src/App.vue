<template>
  <my-btn @click="showDialog">
    Создать пост
  </my-btn>
  <my-dialog v-model:show="dialogVisible">
        <PostForm
           @create="addPost"
         />
  </my-dialog>
 
  <PostList
    :posts="posts"    
    @remove="removePost"    
  />
  <!-- postsPriem под этим названием этот ком-т принимает массив из ком-та PostList -->
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyDialog from '@/components/UI/MyDialog';
import MyBtn from '@/components/UI/MyBtn';
export default {
    components: {
      PostForm,
      PostList,
      MyBtn,
      MyDialog,

    },
    data() {
        return {
            posts: [
                { id: 1, title: 'Название', body: 'Описание поста' },
                { id: 2, title: 'Название 2', body: 'Описание поста 222' },
                { id: 3, title: 'Название 3', body: 'Описание поста 333' }
            ],

            dialogVisible: false
        }
    },
    methods: {
       addPost(post) {
         this.posts.push(post)
         this.dialogVisible = false
        },
        removePost(element) { 
          this.posts = this.posts.filter((post) => post.id !== element.id)
        },
        showDialog() {
          this.dialogVisible = true
        }
    }
}
</script>

<style>
body {
    padding: 0;
    margin: 0;
}

#app {
    width: 90vw;
    margin: 0 auto;
 }

</style>