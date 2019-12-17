<template>
    <div>
        <base-pagination v-show="pageCount > 1" :page-count="pageCount" v-model="selectedPage"></base-pagination>
    </div>
</template>

<script>
    import { PaginationComponent } from 'uncle-vue';

    export default {
        extends: PaginationComponent,
        computed: {
            pageCount: {
                get() {
                    return Math.ceil(this.total/this.paginationObject.perPage)
                }
            }
        }
    }
</script>

<style>
    .pagination {
        justify-content: flex-end;
        padding-right: 30px;
        padding-top:16px;
    }
</style>