<template>
    <span>{{getItemValue(this.value)}}</span>
</template>

<script>
    export default {
        props: {
            fieldObject: {
                type: Object,
                required: true
            },
            value: {
                type: String,
                required: true
            }
        },
        created() {
            this.optionsList = this.fieldObject.getOptions();
        },
        methods: {
            getItemValue(name) {
                for (let optIndex = 0; optIndex < this.optionsList.length; optIndex++) {
                    let opt = this.optionsList[optIndex];
                    if (opt.name == name) {
                        return opt.text;
                    }
                }
            }
        }
    }
</script>