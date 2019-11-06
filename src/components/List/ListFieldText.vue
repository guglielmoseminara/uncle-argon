<template>
    <td>{{ text }}</td>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                required: true
            }
        }
    }
</script>