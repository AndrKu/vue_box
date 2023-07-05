<template>
   <div class="post">
    <div class="post-line">
    <div><strong>Название:</strong> {{ post.title }}</div>
    <div><strong>Описание:</strong> {{ post.body }}</div>
  </div>
  <my-btn
    @click="$emit('remove-post')"
     >
    Удалить
  </my-btn>  

     </div>
</template>

<script>
   export default {
  emits: ['remove-post'],
  props: {
    post: { //Название только в данном компоненте
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
    padding: 1%;
    margin-bottom: 3%;
    border: 2px solid rgb(188, 55, 21);
    border-radius: 6px;
    display: flex;
}

.post-line{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>