<template>
    <div>
        <base-slider v-model="sliders.slider1"></base-slider>
    </div>
</template>

<script>
    import { FilterFieldComponent } from 'uncle-vue';

    export default {
        extends: FilterFieldComponent,
        data(){
            return {
                sliders: {
                    slider1: 0,
                    slider2: [150, 400]
                }
            }
        }
    }
</script>