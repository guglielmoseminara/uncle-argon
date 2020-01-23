<template>
   <span>
       <span v-for="(item, findex) in value" :key="findex" class="array-chips">
            <UncleChip v-if="!fieldObject.limit || (fieldObject.limit && findex < fieldObject.limit)"           :select=false
                class-list="chip-primary-outline"
                :close=false 
                :text="fieldsList[0] ? getValue(item, fieldsList[0]) : ''"
            />
        </span>
        <UncleChip v-if="fieldObject.limit && ((value.length - fieldObject.limit) > 0)" :select=false
            class-list="chip-primary-outline"
            :close=false 
            :text="(value.length - fieldObject.limit)+'+'" 
        />
    </span>
</template>

<script>
    import { ListFieldArrayComponent } from 'uncle-vue';

    export default {
        extends: ListFieldArrayComponent
    }
</script>

<style scoped lang="scss">
    .array-chips {
        margin-right: 5px;
    }
</style>