<template>
    <div class="dialog" @click="hideDialog" v-if="show">
        <div @click.stop class="dialog-content">
           <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my-dialog',
        emits: ['update:show'],
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hideDialog() {
                this.$emit('update:show', false)
            }
        }
    }
</script>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: grey;
    position: fixed;
    display: flex;
    align-items: center;
}
.dialog-content {
    width: 300px;
    height: 200px;
    background-color: beige;
    border-radius: 10px;
    margin: auto;
    padding: 20px;
}
</style>