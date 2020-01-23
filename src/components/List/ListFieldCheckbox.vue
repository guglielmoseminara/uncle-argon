<template>
    <base-checkbox class="mb-3" :disabled="disabled" @input="$emit('input', checked)" v-model="checked" />
</template>

<script>

    export default {
        props: {
            disabled: {
                type: Boolean
            },
            value: {}
        },
        data() {
            return {
                checked: this.value
            }
        },
        watch: {
            value: function(val) {
                this.checked = val;
            }
        }
    }
</script>