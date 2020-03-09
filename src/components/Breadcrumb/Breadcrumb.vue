<template>
    <div>
        <template v-for="(item, itemkey) in items">
            <span class="current-link" v-if="itemkey == (items.length - 1)" :key="itemkey">{{item.text}}</span>
            <router-link
                :to="item.url || ''"
                :href="item.url"
                class="link"
                v-else :key="itemkey">
                <template>
                    {{item.text}}
                </template>
            </router-link>
            <span class="breadcrumb__separator" :key="itemkey+'separator'" v-if="itemkey < (items.length - 1)"> | </span>
        </template>
    </div>
</template>

<script>
    import { BreadcrumbComponent } from 'uncle-vue';

    export default {
        extends: BreadcrumbComponent,
        computed: {
            items() {
                return this.breadcrumbObject.getItems();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .link {
        color: rgba(255, 255, 255, 0.7);
    }
    .current-link {
        color: #fff;
    }
    ::v-deep .router-link-active {
        background-color: transparent;
    }
    .breadcrumb__separator {
        color: #fff;
    }
</style>