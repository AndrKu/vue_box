<template>
  <div>
    <div class="btn-box">
  <my-btn @click="showDialog">Создать пост</my-btn>
  <my-select 
    v-model="selestedSort" 
    :options="sortOptions" >
  </my-select>
    </div>

  <my-dialog v-model:show="dialogVisible">
        <post-form
           @create="addPost">
        </post-form>
  </my-dialog>
 
  <post-list
    :posts="posts"    
<<<<<<< HEAD
    @remove-post="removePost"
   > 
  </post-list>
 <!--  <div v-else>Loading....</div> -->
</div>
=======
    @remove="removePost"    
  />

  
>>>>>>> 53b45aaf9516a225641568456cda0a69ac3b5849
  <!-- postsPriem под этим названием этот ком-т принимает массив из ком-та PostList -->
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

import axios from 'axios';
export default {
    components: {
    PostForm,
    PostList
},
  
    data() {
        return {
            posts: () => [],
            dialogVisible: false,
            selestedSort: '',
            sortOptions: [
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По описанию'}
            ]
           // isPostsLoading: false
        }
    },
    methods: {
       addPost(post) {
         this.posts.push(post)
         this.dialogVisible = false
        },
        removePost(element) { 
          this.posts = this.posts.filter(p => p.id !== element.id)
        },
        showDialog() {
          this.dialogVisible = true
<<<<<<< HEAD
        },
        async fetchPosts() {
          try {
            //this.isPostsLoading = true;
          setTimeout( async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
            this.posts = response.data }, 2000);
            //this.isPostsLoading = false;
          } catch (e) {
              alert('Oshibka');
          }
        }  },

       mounted() {
          this.fetchPosts()
        },
     /*    watch: {
          selestedSort(sort_string) {
           
          }
        } */
=======
          
        }
    }
>>>>>>> 53b45aaf9516a225641568456cda0a69ac3b5849
}
</script>

<style>
body {
    padding: 0;
    margin: 0;
}

#app {
    
    width: 90vw;
    margin: 20px auto 0 auto;
 }

 .btn-box {
  display: flex;
  justify-content: space-between;
 }

</style>