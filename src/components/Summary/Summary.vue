<template>
    <div class="summary">
        <p class="d-flex" v-show='actionsList && actionsList.length > 0'>
            <template v-if="item">
                <slot name="actions">
                    <UncleActionButton 
                        v-for='(actionItem, aindex) in actionsList' 
                        :key='aindex' 
                        :action-obj="actionItem.action" 
                        :color="actionItem.color" 
                        :text="actionItem.text" 
                        :icon="actionItem.icon" 
                        :validate="actionItem.validate" 
                        :confirm="actionItem.confirm" 
                        :params='item'
                        v-show="!actionItem.isHiddenCondition"
                    >
                    </UncleActionButton>
                </slot>
            </template>
        </p>
        <div class="d-lg-flex justify-content-lg-between flex-wrap summary__columns">            
            <template v-if="item && groupsList.length > 0">
                <div class="pl-0 pr-0 col-12 mb-4" v-bind:class="{'col-lg-12': group.layout == 'full', 'col-lg-6': group.layout != 'full'}" v-for="(group, gindex) in groupsList" :key="gindex">
                    <UncleSummaryGroup
                        class="group"
                        :text='group.text'
                    >
                        <template slot="header">
                            <p class="title"> {{group.text}} </p>   
                        </template>
                        <UncleSummaryFieldContainer 
                            v-for="(field, findex) in group.fields" 
                            :key='findex' 
                            :text="field.text" 
                            :field-object="field" 
                            v-show="!field.isHiddenCondition"
                        >
                            <UncleSummaryFieldAbstract 
                                :field-object="field" 
                                :type="field.type" 
                                :value="getValue(item, field)" 
                            />
                        </UncleSummaryFieldContainer>
                    </UncleSummaryGroup>
                </div>
            </template>
            <template v-else>
                <ul v-if="item">
                    <li v-for="(field, findex) in fieldsList" :key="findex">
                        <label v-show="field.type != 'array_image'">
                            {{field.text}}
                        </label>
                        <p>
                            <UncleSummaryFieldAbstract :field-object="field" :type="field.type" :value="getValue(item, field)" v-show="!field.isHiddenCondition" />
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
            },
            test() {
                console.log('test');
            }
        }
    }
</script>

<style scoped lang="scss">
    img {
        width: 200px;
    }
    .summary {
        &__columns {
            height: auto;
        }
        .group {
            margin-right:20px;
            @media (max-width: 992px){ 
                margin-right: 0;
                margin-bottom: 20px;
            }
            .title {
                @extend .h3;
                font-weight: bold;
                margin-bottom: 0;
                color: $color-text-medium;
            }
        }

        .field {
            &:not(:last-child) {
                margin-bottom: 15px;
            }
            .label {
                color: $primary;
                margin-bottom: 8px;
                font-size: $text-small;
            }

        }
    }
</style>