<template>
    <div class="card">
        <div class="row border-0 card-header">
            <h3 class="mb-0 col-3">{{listObject.text}}</h3>
            <div class="col-9 actions-bar" v-if="actionsList.length > 0">
                <UncleActionButton v-for="(actionItem, aindex) in actionsList" :params-object="paramsObject" :key="aindex" :action-item-object='actionItem'/>
            </div>
        </div>
        <base-table ref="table" :class="this.rowsAction ? 'clickable': ''" :columns="headers" :data="itemsList ? itemsList : []" @rowClick="rowClick($event)">
            <template #columns="{columns}">
                <th v-if="listObject.selectable" class="select-all-checkbox" ><UncleListFieldCheckbox @input="setSelectedAllValue($event)" :value="selectedAll"/></th>
                <th @click="toggleArrow(column)" v-for="column in columns" :key="column">
                    <span>{{ headersText[column] }}</span>
                    <span class="arrows" v-show="headersText[column]!='' && headersMap[column].sortable">
                        <base-button @click="arrowClick($event, column, 'ASC')" style="top:-8px;" class="arrow" type="secondary" :icon="currentOrder[column] && currentOrder[column].direction == 'ASC' ? 'fas fa-caret-up' : 'fas fa-angle-up'"></base-button>
                        <base-button @click="arrowClick($event, column, 'DESC')" style="bottom:-8px;" class="arrow" type="secondary" :icon="currentOrder[column] && currentOrder[column].direction == 'DESC' ? 'fas fa-caret-down' : 'fas fa-angle-down'"></base-button>
                    </span>
                </th>
            </template>
            <template v-slot="{ row }">
                <td v-if="listObject.selectable">
                    <UncleListFieldCheckbox @input="selectIndex(row[listObject.selectable_id], $event)" :value='selectedIndexes[row[listObject.selectable_id]]'/>
                </td>
                <td v-for="(field, findex) in fieldsList" :key="findex">
                    <UncleListFieldAbstract :slot=field.name :field-object="field" :row="row"/>
                </td>
            </template>
        </base-table>
        <UnclePagination v-if='paginationObject' :pagination-object='paginationObject' v-model="selectedPage" :total='totalItems'/>
    </div>
</template>

<script>
import { ListComponent } from 'uncle-vue';

export default {
    extends: ListComponent,
    computed: {
        headers: {
            get() {
                return this.headersList ? this.headersList.map((header) => {
                    return header.name
                }) : [];
            }
        },
        headersText: {
            get() {
                return this.headersList ? this.headersList.reduce((prev, item) => {
                    prev[item.name] = item.text;
                    return prev;
                }, {}) : {};
            }
        },
        headersMap: {
            get() {
                return this.headersList ? this.headersList.reduce((prev, item) => {
                    prev[item.name] = item;
                    return prev;
                }, {}) : {};
            }
        },
        rowsAction: {
            get() {
                const rows = this.listObject.getRows();
                return rows ? rows.getAction() : null;
            }
        }
    },
    data() {
        return {
            currentOrder: {},
            defaultDirection: 'ASC',
        }
    },
    methods: {
        arrowClick($event, field, direction) {
            $event.stopPropagation();
            this.updateCurrentOrder(field, direction);
            this.ordersList = [];
            this.ordersList.push({
                field: field,
                direction: direction
            });
        },
        updateCurrentOrder(field, direction) {
            this.currentOrder = {};
            this.currentOrder[field] = {
                direction: direction
            };
        },
        toggleDirection(field) {
            let direction = this.defaultDirection;
            if (this.currentOrder[field]) {
                direction = this.currentOrder[field].direction == 'ASC' ? 'DESC' : 'ASC';
            }
            return direction;
        },
        toggleArrow(field) {
            this.ordersList = [];
            const direction = this.toggleDirection(field);
            this.updateCurrentOrder(field, direction);
            this.ordersList.push({
                field: field,
                direction: direction
            });
        },
        rowClick($event) {
            this.$actionsProvider.execute(this.rowsAction, $event);
        }
    }
};
</script>

<style scoped lang="scss">
    .actions-bar {
        text-align:right;
        & > * {
            margin: 0 20px;
        }
        & > *:last-child {
            margin: 0;
        }
    }
    .select-all-checkbox {
        width:20px;
        padding-bottom: 18px;
    }
    table::v-deep {
        th {
            background-color: #F4F8FB;
            cursor:pointer;
            i {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
            }
            span {
                position:relative;
                float:left;
                &.arrows {
                    width: 2em;
                    height: 1em;
                }
                .arrow {
                    width: 1em;
                    padding: 0;
                    position: absolute;
                    right: 0;
                    box-shadow: none;
                    height: 1em;
                    margin: 0 !important;
                    color: $gray-700;
                }
            }
        }
        &.clickable{
            tr {
                cursor:pointer;
                &:hover {
                    background-color: $gray-100;
                }
            }
        }
        div {
            display: table-cell;
        }
        td {
            word-wrap: break-word;
            white-space: normal !important;
        }
    }
</style>