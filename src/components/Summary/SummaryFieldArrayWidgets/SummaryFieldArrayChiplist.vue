<template>
   <span>
       <span v-for="(field, findex) in fieldsList" :key="findex" class="array-chips">
            <UncleChip :select=false
                class-list="chip-primary-outline"
                :close=false 
                :text="getValue(itemObj, field)"
            />
        </span>
    </span>
</template>

<script>
    import { SummaryFieldArrayComponent } from 'uncle-vue';

    export default {
        extends: SummaryFieldArrayComponent,
        props: {
            itemObj: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style scoped lang="scss">
    .array-chips {
        margin-right: 5px;
    }
</style>