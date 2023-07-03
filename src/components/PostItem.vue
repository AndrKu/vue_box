<template>
   <div class="post">
    <div class="post-line">
    <div><strong>Название:</strong> {{ postPropsElement.title }}</div>
    <div><strong>Описание:</strong> {{ postPropsElement.body }}</div>
  </div>
  <my-btn
    @click="$emit('remove', postPropsElement)">
    Удалить
  </my-btn>  

     </div>
</template>

<script>
import MyBtn from './UI/MyBtn';
   export default {
  components: { MyBtn },
  props: {
    postPropsElement: { //Название только в данном компоненте
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
    padding: 1%;
    margin: 3%;
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