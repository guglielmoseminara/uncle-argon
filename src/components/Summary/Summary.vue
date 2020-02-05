<template>
    <div class="summary">
        <p slot="actions" v-show='actionsList && actionsList.length > 0'>
            <template v-if="item">
                <UncleActionButton v-for='(actionItem, aindex) in actionsList' :key='aindex' :action-item-object='actionItem' :params='item'>{{actionItem.text}}</UncleActionButton>
            </template>
        </p>
        <div class="cols-layout-container">            
            <template v-if="item && groupsList.length > 0">
                <vue-grid align="stretch" justify="start">
                    <vue-cell :width="getGroupWidht(group)" v-for="(group, gindex) in groupsList" :key="gindex">
                        <UncleSummaryGroup
                            class="group"
                            :text='group.text'
                        >
                            <template slot="header">
                                <p class="title"> {{group.text}} </p>   
                            </template>
                            <UncleSummaryFieldContainer v-for="(field, findex) in group.getFields()" :key='findex' :text="field.text" :field-object="field">
                                <UncleSummaryFieldAbstract :field-object="field" :type="field.type" :value="getValue(item, field)" />
                            </UncleSummaryFieldContainer>
                            <!--<div class="field" v-for="(field, findex) in group.getFields()" :key='findex' :text='field.text'>
                                <label v-show="field.type != 'array_image' && !field.disableLabel" class="label" v-if="!field.getLabel()">
                                    {{field.text}}
                                </label>
                                <UncleSummaryFieldAbstract :field-object="field" :type="field.type" :value="getValue(item, field)" />
                            </div>!-->
                        </UncleSummaryGroup>
                    </vue-cell>
                </vue-grid>
            </template>
            <template v-else>
                <ul v-if="item">
                    <li v-for="(field, findex) in fieldsList" :key="findex">
                        <label v-show="field.type != 'array_image'">
                            {{field.text}}
                        </label>
                        <p>
                            <UncleSummaryFieldAbstract :field-object="field" :type="field.type" :value="getValue(item, field)" />
                        </p>
                    </li>
                </ul> 
            </template>

        </div>
    </div>
</template>

<script>
    import { SummaryComponent } from 'uncle-vue';

    export default {
        extends: SummaryComponent,
        methods: {
            getGroupWidht(group) {
                if (group.layout == 'full') {
                    return '12of12';
                } else {
                    return '6of12';
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    img {
        width: 200px;
    }
    .summary .field .label {
        color:$primary;
    }
    .cols-layout-container {
        height: auto;
    }
</style>