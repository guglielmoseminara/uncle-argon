<template>
    <td>
        <base-checkbox class="mb-3" :disabled="disabled" @input="$emit('input', value)" v-model="value" />
    </td>
</template>

<script>

    export default {
        props: {
            disabled: {
                type: Boolean
            },
            checked: {
                type: Boolean
            }
        },
        data() {
            return {
                value: this.checked
            }
        }
    }
</script>