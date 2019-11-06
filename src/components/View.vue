<template>
    <div>
        <UncleSearchPage v-if="pageObject.type=='search'" :page-object=pageObject />
        <UncleDetailPage v-if="pageObject.type=='detail'" :page-object=pageObject />
        <UncleInsertPage v-if="pageObject.type=='insert'" :page-object=pageObject />
        <slot></slot>
    </div>
</template>

<script>
    import { ViewComponent } from 'uncle-vue';

    export default {
        extends: ViewComponent,
        mounted() {
        }
    }
</script>