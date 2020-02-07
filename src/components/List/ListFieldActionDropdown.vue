<template>
    <UncleActionDropdown :actions-list="actionsList" :params='listRowObject'/>
</template>

<script>
    export default {
        props: {
            actionsList: {
                type: Array,
                required: true
            },
            listRowObject: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    td {
        text-align: right;
    }
    td >>> .dropdown-menu {
        left:auto;
        right:0;
    } 
</style>