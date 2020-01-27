import VeeValidate from 'vee-validate';
import ArgonDashboard from 'vue-argon-dashboard/src/plugins/argon-dashboard'
import IconsProvider from './icon';
import NotifierProvider from './notifier';
import ActionsProvider from './actions';
import ModalProvider from './modal';
import AsyncComputed from 'vue-async-computed';
import { Validator } from 'vee-validate';
import it from 'vee-validate/dist/locale/it';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';
const VueUploadComponent = require('vue-upload-component');
import { VueGrid, VueCell } from 'vue-grd';
import VueTagsInput from '@johmun/vue-tags-input';
import VueBreadcrumbs from 'vue-breadcrumbs'

import {
    UncleSidebar,
    UncleView,
    UncleBreadcrumb,
    UncleSearchText,
    UncleList,
    UncleListToken,
    UncleListTable,
    UncleListFieldAbstract,
    UncleListFieldText,
    UncleListFieldEnum,
    UncleListFieldCheckbox,
    UncleListFieldBoolean,
    UncleListFieldArray,
    UncleListFieldArrayChiplist,
    UncleListWidgetAbstract,
    UnclePagination,
    UncleFilterModal,
    UncleFilterFieldAbstract,
    UncleFilterModalFieldEnum,
    UncleFilterModalFieldBoolean,
    UncleFilterModalFieldResource,
    UncleFilterModalFieldResourceMany,
    UncleActionDropdown,
    UncleListFieldAction,
    UncleActionButton,
    UncleActionSubmit,
    UncleActionDropdownItem,
    UncleAction,
    UncleActionNavItem,
    UncleActionModalItem,
    UncleTabs,
    UncleModal,
    UncleModalGallery,
    UncleSummary,
    UncleSummaryFieldAbstract,
    UncleSummaryFieldArrayChiplist,
    UncleSummaryWidgetAbstract,
    UncleSummaryFieldText,
    UncleSummaryFieldTextArea,
    UncleSummaryFieldDatetime,
    UncleSummaryFieldArray,
    UncleSummaryFieldImage,
    UncleSummaryFieldObject,
    UncleSummaryFieldEnum,
    UncleSummaryLabelAbstract,
    UncleSummaryLabelField,
    UncleSummaryGroup,
    UncleForm,
    UncleFormFieldAbstract,
    UncleFormFieldContainer,
    UncleFormFieldText,
    UncleFormFieldPassword,
    UncleFormFieldTextArea,
    UncleFormFieldEmail,
    UncleFormFieldImage,
    UncleFormFieldEnum,
    UncleFormFieldResource,
    UncleFormFieldResourceMany,
    UncleFormFieldPhone,
    UncleFormFieldHidden,
    UncleSummaryFieldArrayImage,
    UncleFormGroup,
    UncleChip,
} from './components';

export default {
    install(Vue, options) {
        Vue.use(ArgonDashboard);
        Vue.use(VeeValidate);
        Vue.use(AsyncComputed);
        Vue.use(VueToast);
        Vue.use(VueBreadcrumbs);
        const notifier = new NotifierProvider(Vue.$toast);
        var app = Vue.prototype.$uncle.getApp();
        Vue.prototype.$eventHub = new Vue();
        app.serviceManager.setNotifier(notifier);
        app.serviceManager.setEventEmitter(Vue.prototype.$eventHub);
        Vue.component('UncleSidebar', UncleSidebar);
        Vue.component('UncleView', UncleView);
        Vue.component('UncleBreadcrumb', UncleBreadcrumb);
        Vue.component('UncleSearchText', UncleSearchText);
        Vue.component('UncleList', UncleList);
        Vue.component('UncleListTable', UncleListTable);
        Vue.component('UncleListToken', UncleListToken);
        Vue.component('UncleListFieldAbstract', UncleListFieldAbstract);
        Vue.component('UncleListFieldText', UncleListFieldText);
        Vue.component('UncleListFieldEnum', UncleListFieldEnum);
        Vue.component('UncleListFieldCheckbox', UncleListFieldCheckbox);
        Vue.component('UncleListFieldAction', UncleListFieldAction);
        Vue.component('UncleListFieldBoolean', UncleListFieldBoolean);
        Vue.component('UncleListFieldArray', UncleListFieldArray);
        Vue.component('UncleListFieldArrayChiplist', UncleListFieldArrayChiplist);
        Vue.component('UncleListWidgetAbstract', UncleListWidgetAbstract);
        Vue.component('UnclePagination', UnclePagination);
        Vue.component('UncleFilterModal', UncleFilterModal);
        Vue.component('UncleFilterFieldAbstract', UncleFilterFieldAbstract);
        Vue.component('UncleFilterModalFieldBoolean', UncleFilterModalFieldBoolean);
        Vue.component('UncleFilterModalFieldEnum', UncleFilterModalFieldEnum);
        Vue.component('UncleFilterModalFieldResource', UncleFilterModalFieldResource);
        Vue.component('UncleFilterModalFieldResourceMany', UncleFilterModalFieldResourceMany);
        Vue.component('UncleActionDropdown', UncleActionDropdown);
        Vue.component('UncleActionButton', UncleActionButton);
        Vue.component('UncleActionSubmit', UncleActionSubmit);
        Vue.component('UncleActionDropdownItem', UncleActionDropdownItem);
        Vue.component('UncleAction', UncleAction);
        Vue.component('UncleActionNavItem', UncleActionNavItem);
        Vue.component('UncleActionModalItem', UncleActionModalItem);
        Vue.component('UncleTabs', UncleTabs);
        Vue.component('UncleModal', UncleModal);
        Vue.component('UncleModalGallery', UncleModalGallery);
        Vue.component('UncleSummary', UncleSummary);
        Vue.component('UncleSummaryFieldAbstract', UncleSummaryFieldAbstract);
        Vue.component('UncleSummaryFieldText', UncleSummaryFieldText);
        Vue.component('UncleSummaryFieldTextArea', UncleSummaryFieldTextArea);
        Vue.component('UncleSummaryFieldDatetime', UncleSummaryFieldDatetime);
        Vue.component('UncleSummaryFieldArray', UncleSummaryFieldArray);
        Vue.component('UncleSummaryFieldImage', UncleSummaryFieldImage);
        Vue.component('UncleSummaryFieldObject', UncleSummaryFieldObject);
        Vue.component('UncleSummaryFieldEnum', UncleSummaryFieldEnum);
        Vue.component('UncleSummaryLabelAbstract', UncleSummaryLabelAbstract);
        Vue.component('UncleSummaryLabelField', UncleSummaryLabelField);
        Vue.component('UncleForm', UncleForm);
        Vue.component('UncleFormFieldAbstract', UncleFormFieldAbstract);
        Vue.component('UncleFormFieldContainer', UncleFormFieldContainer);
        Vue.component('UncleFormFieldText', UncleFormFieldText);
        Vue.component('UncleFormFieldPassword', UncleFormFieldPassword);
        Vue.component('UncleFormFieldTextArea', UncleFormFieldTextArea);
        Vue.component('UncleFormFieldEmail', UncleFormFieldEmail);
        Vue.component('UncleFormFieldImage', UncleFormFieldImage);
        Vue.component('UncleFormFieldEnum', UncleFormFieldEnum);
        Vue.component('UncleFormFieldResource', UncleFormFieldResource);
        Vue.component('UncleFormFieldResourceMany', UncleFormFieldResourceMany);    
        Vue.component('UncleFormFieldPhone', UncleFormFieldPhone);
        Vue.component('UncleFormFieldHidden', UncleFormFieldHidden);
        Vue.component('UncleFormGroup', UncleFormGroup);
        Vue.component('UncleSummaryGroup', UncleSummaryGroup);
        Vue.component('UncleChip', UncleChip);
        Vue.component('UncleSummaryFieldArrayChiplist', UncleSummaryFieldArrayChiplist);
        Vue.component('UncleSummaryWidgetAbstract', UncleSummaryWidgetAbstract);
        Vue.component('UncleSummaryFieldArrayImage', UncleSummaryFieldArrayImage);  

        Vue.component('file-upload', VueUploadComponent);
        Vue.component('vue-grid', VueGrid);
        Vue.component('vue-cell', VueCell);
        Vue.component('vue-tags-input', VueTagsInput);

        Vue.prototype.$iconsProvider = new IconsProvider();
        Vue.prototype.$actionsProvider = new ActionsProvider(options.router);
        Vue.prototype.$modalProvider = new ModalProvider(Vue.prototype.$eventHub);
        
        Validator.localize('it', it);
        Validator.extend('alpha_spaces_points', {
            validate: (value) => {
                var regex = new RegExp(/^[A-Za-z .]+$/u);
                return regex.test(value);
            }
        });
        
        // console.log(this.event);
    }
}