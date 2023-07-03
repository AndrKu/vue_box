<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
      name: 'my-btn',
    }
</script>

<style scoped>
 .btn {
    background: aqua;
    padding: 5px 8px;
    margin-left: auto;
 }

</style>