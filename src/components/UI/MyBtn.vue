<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
      name: 'my-btn',
      //emits: ['click','update:show']
    }
</script>

<style scoped>
 .btn {
    background: aqua;
    padding: 5px 8px;
 }

</style>