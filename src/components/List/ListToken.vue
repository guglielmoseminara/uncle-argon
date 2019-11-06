<template>
    <div>
        <UncleChip :select=false :close=true @closed="removeToken(token)" v-for="(token, findex) in itemsList" :key="findex" :text="token.text"/>
    </div>
</template>

<script>
import { ListComponent } from 'uncle-vue';

export default {
    extends: ListComponent,
    methods: {
        removeToken(token) {
            this.$emit('removed', token);
        }
    }
};
</script>

<style scoped lang="scss">
    .chip {
        margin-right:10px;
    }
</style>