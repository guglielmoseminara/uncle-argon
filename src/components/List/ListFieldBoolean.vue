<template>
    <td>{{ text == true ? 'Yes' : 'No' }}</td>
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