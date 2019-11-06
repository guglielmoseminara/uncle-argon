<template>
    <div>
        <span v-for="(field, findex) in fieldsList" :key="findex">
            <b>{{field.text}}</b>
            <p>
                <UncleSummaryFieldAbstract :field-object="field" :type="field.type" :value="getValue(value, field.type, field.name)" />
            </p>
        </span>
    </div>
</template>

<script>
    import { SummaryFieldObjectComponent } from 'uncle-vue';

    export default {
        extends: SummaryFieldObjectComponent
    }
</script>