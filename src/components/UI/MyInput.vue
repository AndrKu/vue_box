<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>

    export default {
        name: 'my-input',
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
       
            }
        }
    }
</script>

<style scoped>
.input {
    height: 40px;
    padding: 1%;
    margin: 11px 0px;
}
</style>