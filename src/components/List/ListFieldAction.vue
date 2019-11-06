<template>
    <td @click="$event.stopPropagation()" >
        <UncleActionDropdown :actions-list="actionsList" :params-object='listRowObject'/>
    </td>
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