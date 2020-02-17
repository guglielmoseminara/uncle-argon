<template>
    <div>
        <base-slider v-if="range" v-model="filterValue" @input="sliderChange($event)" :range="range" :options="getOptions()"></base-slider>
        <div class="slider-range__container" v-if="range">
            <div>{{range.min}} {{fieldObject.symbol}}</div>
            <div>{{filterValue}} {{fieldObject.symbol}}</div>
            <div>{{range.max}} {{fieldObject.symbol}}</div>
        </div>
    </div>
</template>

<script>
    import { FilterFieldNumberComponent } from 'uncle-vue';
    import wNumb from 'wnumb';

    export default {
        extends: FilterFieldNumberComponent,
        data() {
            return {
                filterValue: 0
            }
        },
        methods: {
            sliderChange(value) {
                this.triggerInput(value);
            },
            getOptions() {
                return {step: 1, format: wNumb({decimals: 0})};
            }
        }
    }
</script>

<style lang="scss" scoped>
    .slider-range__container {
        display: flex;
        justify-content: space-between;
    }
</style>