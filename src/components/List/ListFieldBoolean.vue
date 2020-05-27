<template>
    <span>
        {{ text === true || text == 'true' || text == 1 ? $languageProvider.get('listFieldBooleanTrue') : $languageProvider.get('listFieldBooleanFalse') }}
    </span>
</template>

<script>
    export default {
        props: {
            text: {
                type: [String, Boolean, Number],
                required: true
            }
        }
    }
</script>