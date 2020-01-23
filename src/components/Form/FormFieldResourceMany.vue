<template>
    <div ref="input" class="form-group">
        <vue-tags-input
            v-model="tag"
            :tags="tags"
            :autocomplete-items="filteredItems"
            @tags-changed="update"
        >
            <div
                slot="autocomplete-item"
                slot-scope="props"
                @click="props.performAdd(props.item)"
            >
            {{ props.item.text }}
            </div>
        </vue-tags-input>
    </div>
</template>

<script>
    import { FormFieldResourceManyComponent } from 'uncle-vue';

    export default {
        extends: FormFieldResourceManyComponent,
        data() {
            return {
                tag: '',
                debounce: null,
            };
        },
        mounted() {
            this.$refs.input.querySelector('.ti-input').classList.add('form-control');
        },
        watch: {
            'tag': 'initItems',
        },
        methods: {
            update(newTags) {
                this.itemsList = []
                this.tags = newTags;
                this.formValue = this.tags.map(item => {
                    return item.item
                });
                this.triggerInput();
            },
            initItems() {
                clearTimeout(this.debounce);
                this.debounce = setTimeout(async () => {
                    await this.loadItems(this.tag);
                }, 600);
            },
            createTags(val) {
                this.tags = val.map((item) => {
                    return {
                        text: item[this.fieldObject.item.textField],
                        item: item
                    }
                });
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
    }
</script>

<style scoped lang="scss">
    ::v-deep .ti-input {
        min-height:calc(1.5em + 1.25rem + 2px);
        height:auto;
    }
</style>