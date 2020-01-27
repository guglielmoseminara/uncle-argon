<template>
    <modal :show.sync="isOpened">
     <template slot="header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalObject.title}}</h5>
     </template>
     <div>
      <UncleForm v-if="formObject" ref="form" :form='formObject.name' :params="params"/>
      <slot name="content" :opened-params="openedParams"></slot>
     </div>
     <template slot="footer">
         <base-button v-if="hasCloseBtn" type="secondary" @click="close()">Chiudi</base-button>
         <base-button @click="formSubmit" v-if="formObject" type="primary">Salva</base-button>
     </template>
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