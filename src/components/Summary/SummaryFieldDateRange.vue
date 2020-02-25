<template>
    <div class="date-range__container">
        <div class="date-range__text">
            <label class="label">
                Dal
            </label>
            <span class="field-text" style="margin-right:21px;">{{value[0]}}</span>
        </div>
        <div class="date-range__text">
            <label class="label">
                Al
            </label>
            <span class="field-text">{{value[1]}}</span>
        </div>
    </div>
</template>

<script>
    import { SummaryFieldDateRangeComponent } from 'uncle-vue';
    export default {
        extends: SummaryFieldDateRangeComponent,
    }
</script>

<style scoped lang="scss">
    .date-range__container {
        display: flex;
        .date-range__text {
            width:50%;
            .field-text {
                color: $color-text-dark;
                font-weight: 500;
                font-size: $text-small;
                border: 1px solid $border-color;
                display: block;
                padding: 14px;
                border-radius: 4px;
                min-height: 50px;
            }
            .label {
                color:$primary;
            }
        }
    }
</style>