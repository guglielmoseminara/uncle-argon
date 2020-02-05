import VeeValidate from 'vee-validate';
import ArgonDashboard from 'vue-argon-dashboard/src/plugins/argon-dashboard'
import IconsProvider from './icon';
import NotifierProvider from './notifier';
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
import flatPickr from 'vue-flatpickr-component';

import 'leaflet/dist/leaflet.css';
import 'flatpickr/dist/flatpickr.css';
import { Icon }  from 'leaflet';
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

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
    UncleFilterModalFieldNumberSlider,
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
    UncleSummaryFieldContainer,
    UncleSummaryFieldArrayChiplist,
    UncleSummaryWidgetAbstract,
    UncleSummaryFieldText,
    UncleSummaryFieldTextArea,
    UncleSummaryFieldDatetime,
    UncleSummaryFieldDateRange,
    UncleSummaryFieldArray,
    UncleSummaryFieldImage,
    UncleSummaryFieldObject,
    UncleSummaryFieldEnum,
    UncleSummaryFieldMap,
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
    UncleFormFieldGeoAddress,
    UncleFormFieldDateRangeDistinct,
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
        Vue.prototype.$eventHub = new Vue();
        const notifierProvider = new NotifierProvider(Vue.$toast);
        const iconsProvider = new IconsProvider();
        const modalProvider = new ModalProvider(Vue.prototype.$eventHub);
        Vue.prototype.$iconsProvider = iconsProvider;
        Vue.prototype.$modalProvider = modalProvider;
        var app = Vue.prototype.$uncle.getApp();
        app.serviceManager.setNotifier(notifierProvider);
        app.serviceManager.setModal(modalProvider);
        app.serviceManager.setIcons(iconsProvider);
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
        Vue.component('UncleFilterModalFieldNumberSlider', UncleFilterModalFieldNumberSlider);
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
        Vue.component('UncleSummaryFieldContainer', UncleSummaryFieldContainer);
        Vue.component('UncleSummaryFieldText', UncleSummaryFieldText);
        Vue.component('UncleSummaryFieldTextArea', UncleSummaryFieldTextArea);
        Vue.component('UncleSummaryFieldDatetime', UncleSummaryFieldDatetime);
        Vue.component('UncleSummaryFieldDateRange', UncleSummaryFieldDateRange);
        Vue.component('UncleSummaryFieldArray', UncleSummaryFieldArray);
        Vue.component('UncleSummaryFieldImage', UncleSummaryFieldImage);
        Vue.component('UncleSummaryFieldObject', UncleSummaryFieldObject);
        Vue.component('UncleSummaryFieldEnum', UncleSummaryFieldEnum);
        Vue.component('UncleSummaryFieldMap', UncleSummaryFieldMap);
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
        Vue.component('UncleFormFieldGeoAddress', UncleFormFieldGeoAddress);
        Vue.component('UncleFormFieldDateRangeDistinct', UncleFormFieldDateRangeDistinct);
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
        Vue.component('flat-pickr', flatPickr);

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