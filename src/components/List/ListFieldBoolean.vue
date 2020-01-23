<template>
    <span>
        {{ text == true ? 'Yes' : 'No' }}
    </span>
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