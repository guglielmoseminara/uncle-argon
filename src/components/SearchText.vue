<template>
    <base-input @input="triggerInput" v-model="searchText" placeholder="Search" class="input-group-alternative" alternative="" addon-right-icon="fas fa-search"></base-input>
</template>

<script>
    import { SearchTextComponent } from 'uncle-vue';

    export default {
        extends: SearchTextComponent,
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    .input-group {
        margin:0;
    }
</style>