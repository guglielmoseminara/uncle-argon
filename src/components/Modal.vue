<template>
    <modal :show.sync="isOpened">
        <template slot="header">
            <div class="pl-0 col-4 filters-header__container">
                <h4 class="modal-title">{{modalObject.title}}</h4>
            </div>
            <div class="pr-0 col-8 filters-buttons__container d-flex justify-content-end">
                <base-button v-if="hasCloseBtn" type="secondary" icon="fas fa-times" @click="close()">{{$languageProvider.get('close')}}</base-button>
                <base-button @click="formSubmit" icon="fas fa-check" type="primary">{{$languageProvider.get('apply')}}</base-button>
            </div>
        </template>
        <div>
            <UncleForm v-if="formObject" ref="form" :form='formObject.name' :params="params"/>
            <slot name="content" :opened-params="openedParams"></slot>
        </div>
   </modal>
</template>

<script>
    import { ModalComponent } from 'uncle-vue';

    export default {
        extends: ModalComponent,
        props: {
            hasCloseBtn: {
                type: Boolean,
                default: true
            },
        },
        created() {
            this.formObject = this.getComponents('Form').pop();
            this.$eventHub.$on('opened',  (value) => {
                this.openedParams = value;
                if (this.modalObject.name === value.modalId) {
                    this.isOpened = value.visible;
                    this.params = value.params;
                }
            });
        },
        methods: {
            formSubmit() {
                this.$refs.form.triggerSubmit();
            },
            close() {
                this.$modalProvider.close(this.modalObject.name);
            }
        },
        data() {
            return {
                isOpened: false,
                formObject: null,
                params: null,
                openedParams: {},
            }
        },
    }
</script>

<style scoped lang="scss">
    ::v-deep .modal-body {
        padding-top: 0;
        .actions__container {
            display: none;
        }
        .fields__container {
            max-width: 100%;
            width: 100%;
            flex: 0 0 100%;
        }
        .fields-container__column {
            width: 100%;
            max-width: 100%;
            flex: 0 0 100%;
        }
        .group {
            width:100%;
            border: none;
            .card-header {
                display: none;
            }
            .card-body {
                padding: 0;
            }
        }
    }
    .gallery-modal::v-deep {
        div.modal-content {
            background: transparent!important;
            box-shadow: none;
            .modal-body {
                border-radius: 10px;
                padding: 0;  
            }
            .modal-header {
                display: none;
            }
        }

        .modal-dialog {
            max-width: 900px!important;
        }
    }
</style>