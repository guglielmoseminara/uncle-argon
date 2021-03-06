<template>
    <div ref="tagsinput" class="resource-many-field">
        <vue-tags-input
            v-model="tag"
            :tags="tags"
            :autocomplete-items="filteredItems"
            @tags-changed="update"
            :data-max-tags='fieldObject.max ? parseInt(fieldObject.max) : false'
            @before-adding-tag="addTag"
            :placeholder="placeholderString || 'Aggiungi tag'"
        >
            <div
                slot="autocomplete-item"
                slot-scope="props"
                @click="props.performAdd(props.item)"
            >
            {{ props.item.text }}
            </div>
        </vue-tags-input>
        <vue-loaders-ball-clip-rotate class="resource-many-loader" v-show="loading"/>
        <base-button v-if="fieldObject.modal" :type="'primary'" @click="add()">Aggiungi</base-button>
        <UncleModal v-if="fieldObject.modal" :modal-obj="fieldObject.modal" @close="modalClosed" @apply="modalApply"/>
    </div>
</template>

<script>
    import { FormFieldResourceManyComponent } from 'uncle-vue';
    if (typeof window != 'undefined') {
        var VueTagsInput = require('@johmun/vue-tags-input').VueTagsInput
    }
    
    var component = {
        extends: FormFieldResourceManyComponent,
        data() {
            return {
                tag: '',
                debounce: null,
                tagAdded: [],
                loading: false,
            };
        },
        mounted() {
            this.$refs.tagsinput.querySelector('.ti-input').classList.add('form-control');
        },
        watch: {
            tag: 'initItems',
            tags() {
                this.checkInput();
            }
        },
        methods: {
            update(newTags) {
                this.itemsList = []
                this.tags = newTags;
                this.checkInput();
                if (parseInt(this.fieldObject.max) == 1) {
                    this.formValue = this.tags.length > 0 ? this.tags[0].item : null;
                } else {
                    this.formValue = this.tags.map(item => {
                        return item.item
                    });
                }
                this.triggerInput();
            },
            initItems() {
                this.loading = true;
                clearTimeout(this.debounce);
                this.debounce = setTimeout(async () => {
                    await this.loadItems(this.tag);
                    this.loading = false;
                }, 600);
            },
            createTags(val) {
                if (Array.isArray(val)) {
                    this.tags = val.map((item) => {
                        return {
                            text: item[this.fieldObject.item.textField],
                            item: item
                        }
                    });
                } else if (val[this.fieldObject.item.textField]){
                    this.tags = [{
                        text: val[this.fieldObject.item.textField],
                        item: val
                    }]
                }
                this.checkInput();
            },
            add(params = {}) {
                if (this.fieldObject.modal) {
                    this.$modalProvider.open(this.fieldObject.modal.name, params);
                }
            },
            async addTag(obj) {
                const tag = obj.tag.text;
                const item = obj.tag.item;
                await this.loadItems(tag);
                if (this.itemsList.length == 0) {
                    var params = {};
                    params[this.fieldObject.item.textField] = tag;
                    this.add({
                        item:params
                    });
                    this.tag = '';
                } else if (this.itemsList.length == 1) {
                    this.selectItems(this.itemsList);
                    this.tag = '';
                } else {
                    this.selectItems([this.itemsList[0]]);
                    this.tag = '';
                }
            },
            checkInput() {
                if (this.fieldObject.max && this.$refs.tagsinput) {
                    if (this.tags.length == this.fieldObject.max) {
                        this.$refs.tagsinput.querySelector('.ti-input input').style.display = "none";
                    } else {
                        this.$refs.tagsinput.querySelector('.ti-input input').style.display = "block";
                    }
                }
            },
            updateValue() {
                if (parseInt(this.fieldObject.max) == 1) {
                    this.formValue = this.tags.length > 0 ? this.tags[0].item : null;
                } else {
                    this.formValue = this.tags.map(item => {
                        return item.item
                    });
                }
            },
            async modalClosed(value) {
                if (this.tagAdded && this.tagAdded.length > 0) {
                    for (let t = 0; t < this.tagAdded.length; t++) {
                        const tag = this.tagAdded[t][this.fieldObject.item.textField];
                        if (tag) {
                            await this.loadItems(tag);
                            if (this.itemsList.length == 1) {
                                this.selectItems(this.itemsList);
                            } else if (this.itemsList.length > 1) {
                                const itemList = this.itemsList.find((item) => {
                                    return item[this.fieldObject.item.textField] == tag
                                });
                                this.selectItems([itemList]);
                            }
                        }
                    }
                    this.tag = '';
                    this.tagAdded = [];
                }
            },
            modalApply(value) {
                if (value) {
                    const textField = this.fieldObject.item.textField;
                    const tagExist = this.tagAdded.find((tag) => {
                        return tag[textField] == value[textField]
                    });
                    if (!tagExist) {
                        this.tagAdded.push(value);
                    }
                }
            },
            selectItems(items) {
                if (items.length > 0) {
                    for (let i = 0; i < items.length; i++) {
                        this.tags.push({
                            text: items[i][this.fieldObject.item.textField],
                            item: items[i]
                        });   
                    }
                    this.updateValue();
                    this.triggerInput();
                }
            }
        },
        computed: {
            filteredItems() {
                return this.itemsList.map(item => {
                    return {
                        text: item[this.fieldObject.item.textField],
                        item: item
                    }
                });
            }
        }
    };
    if (typeof window != 'undefined') {
        component.components = { 'vue-tags-input': VueTagsInput };
    }
    export default component;
</script>

<style scoped lang="scss">
    ::v-deep .ti-input {
        min-height:calc(1.5em + 1.25rem + 2px);
        height:auto;
    }
    .resource-many-field {
        display:flex;
        position: relative;
    }
    .vue-tags-input {
        max-width:100%;
        width: 100%;
        margin-right: 20px;
    }
    .resource-many-loader.ball-clip-rotate {
        position: absolute;
        right: 150px;
        top: 12px;
        height: 0.875rem;
    }
    ::v-deep .resource-many-loader.ball-clip-rotate > div{
        border-top-color: $primary !important;
        border-left-color: $primary !important;
        border-right-color: $primary !important;
        width: 0.875rem !important;
        height: 0.875rem !important;
        display:block;
    }
</style>