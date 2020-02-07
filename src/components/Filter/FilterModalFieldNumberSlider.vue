<template>
    <div>
        <base-slider v-if="range" v-model="sliderValue" @input="sliderChange($event)" :range="range" :options="{step: 1}"></base-slider>
        <div class="slider-range__container" v-if="range">
            <div>{{range.min}} {{fieldObject.symbol}}</div>
            <div>{{sliderValue}} {{fieldObject.symbol}}</div>
            <div>{{range.max}} {{fieldObject.symbol}}</div>
        </div>
    </div>
</template>

<script>
    import { FilterFieldNumberComponent } from 'uncle-vue';

    export default {
        extends: FilterFieldNumberComponent,
        data() {
            return {
                filterValue: 0,
                sliderValue: this.filterValue
            }
        },
        methods: {
            sliderChange(value) {
                console.log(parseInt(value));
                this.triggerInput(parseInt(value));
            }
        },
        watch: {
            filterValue() {
                this.sliderValue = this.filterValue;
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