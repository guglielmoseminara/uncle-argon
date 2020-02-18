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

<style scoped lang="scss">
    ::v-deep .dropdown-menu {
        left:auto;
        right:0;
    } 
    ::v-deep .dropdown {
        float: right;
    }
</style>