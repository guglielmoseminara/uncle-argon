<template>
    <div>
        <template v-for="(item, index) in itemsList">
            <slot name="listItem" :item="item" :index="index"></slot>
        </template>
    </div>
</template>

<script>
import { ListComponent } from 'uncle-vue';

export default {
    extends: ListComponent
};
</script>