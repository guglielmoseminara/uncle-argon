import ArgonDashboard from 'vue-argon-dashboard';
import VeeValidate from 'vee-validate';
import IconsProvider from './icon';
import NotifierProvider from './notifier';
import ModalProvider from './modal';
import ValidatorProvider from './validator';
import LanguageObject from './language';
import ConfigurationProvider from './config';
import AsyncComputed from 'vue-async-computed';
import VueToast from 'vue-toast-notification';
const VueUploadComponent = require('vue-upload-component');
import { VueGrid, VueCell } from 'vue-grd';
import VueBreadcrumbs from 'vue-breadcrumbs'
import flatPickr from 'vue-flatpickr-component';
import NoSSR from 'vue-no-ssr';

import VueLoadersBallClipRotate from 'vue-loaders/dist/loaders/ball-clip-rotate';
import VueLoadersBallBeat from 'vue-loaders/dist/loaders/ball-beat';

import 'vue-toast-notification/dist/index.css';
import 'leaflet/dist/leaflet.css';
import 'flatpickr/dist/flatpickr.css';
import 'vue-loaders/dist/vue-loaders.css';

import {
    UncleSidebar,
    UncleBreadcrumb,
    UncleSearchText,
    UncleButton,
    UncleList,
    UncleListToken,
    UncleListTable,
    UncleListFieldAbstract,
    UncleListFieldText,
    UncleListFieldUrl,
    UncleListFieldEnum,
    UncleListFieldCheckbox,
    UncleListFieldBoolean,
    UncleListFieldArray,
    UncleListFieldArrayChiplist,
    UncleListFieldActionDropdown,
    UncleListFieldActionButton,
    UncleListWidgetAbstract,
    UnclePagination,
    UncleFilterModal,
    UncleFilterFieldAbstract,
    UncleFilterModalFieldEnum,
    UncleFilterModalFieldDate,
    UncleFilterModalFieldBoolean,
    UncleFilterModalFieldResource,
    UncleFilterModalFieldResourceMany,
    UncleFilterModalFieldNumberSlider,
    UncleActionDropdown,
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
    UncleSummaryFieldHidden,
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
    UncleFormFieldCheckbox,
    UncleFormFieldPassword,
    UncleFormFieldTextArea,
    UncleFormFieldEmail,
    UncleFormFieldImage,
    UncleFormFieldEnum,
    UncleFormFieldResource,
    UncleFormFieldResourceMany,
    UncleFormFieldGeoAddress,
    UncleFormFieldPhone,
    UncleFormFieldHidden,
    UncleFormFieldDateRangeDistinct,
    UncleFormFieldObject,
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
        var app = Vue.prototype.$uncle.getApp();
        const notifierProvider = new NotifierProvider(Vue.$toast);
        const iconsProvider = new IconsProvider();
        const modalProvider = new ModalProvider(Vue.prototype.$eventHub);
        const configurationProvider = new ConfigurationProvider();
        const languageProvider = app.serviceManager.getLanguageProvider();
        languageProvider.setLocale(options.locale);
        languageProvider.merge(LanguageObject);
        Vue.prototype.$iconsProvider = iconsProvider;
        Vue.prototype.$modalProvider = modalProvider;
        Vue.prototype.$configurationProvider = configurationProvider;
        Vue.prototype.$notifierProvider = notifierProvider;
        app.serviceManager.setNotifier(notifierProvider);
        app.serviceManager.setModal(modalProvider);
        app.serviceManager.setIcons(iconsProvider);
        app.serviceManager.setConfigurationProvider(configurationProvider);
        app.serviceManager.setEventEmitter(Vue.prototype.$eventHub);
        Vue.component('UncleSidebar', UncleSidebar);
        Vue.component('UncleBreadcrumb', UncleBreadcrumb);
        Vue.component('UncleSearchText', UncleSearchText);
        Vue.component('UncleButton', UncleButton);
        Vue.component('UncleList', UncleList);
        Vue.component('UncleListTable', UncleListTable);
        Vue.component('UncleListToken', UncleListToken);
        Vue.component('UncleListFieldAbstract', UncleListFieldAbstract);
        Vue.component('UncleListFieldText', UncleListFieldText);
        Vue.component('UncleListFieldUrl', UncleListFieldUrl);
        Vue.component('UncleListFieldEnum', UncleListFieldEnum);
        Vue.component('UncleListFieldCheckbox', UncleListFieldCheckbox);
        Vue.component('UncleListFieldActionDropdown', UncleListFieldActionDropdown);
        Vue.component('UncleListFieldActionButton', UncleListFieldActionButton);
        Vue.component('UncleListFieldBoolean', UncleListFieldBoolean);
        Vue.component('UncleListFieldArray', UncleListFieldArray);
        Vue.component('UncleListFieldArrayChiplist', UncleListFieldArrayChiplist);
        Vue.component('UncleListWidgetAbstract', UncleListWidgetAbstract);
        Vue.component('UnclePagination', UnclePagination);
        Vue.component('UncleFilterModal', UncleFilterModal);
        Vue.component('UncleFilterFieldAbstract', UncleFilterFieldAbstract);
        Vue.component('UncleFilterModalFieldBoolean', UncleFilterModalFieldBoolean);
        Vue.component('UncleFilterModalFieldEnum', UncleFilterModalFieldEnum);
        Vue.component('UncleFilterModalFieldDate', UncleFilterModalFieldDate);
        Vue.component('UncleFilterModalFieldResource', UncleFilterModalFieldResource);
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
        Vue.component('UncleSummaryFieldHidden', UncleSummaryFieldHidden);
        Vue.component('UncleSummaryFieldTextArea', UncleSummaryFieldTextArea);
        Vue.component('UncleSummaryFieldDatetime', UncleSummaryFieldDatetime);
        Vue.component('UncleSummaryFieldDateRange', UncleSummaryFieldDateRange);
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
        Vue.component('UncleFormFieldCheckbox', UncleFormFieldCheckbox);
        Vue.component('UncleFormFieldEmail', UncleFormFieldEmail);
        Vue.component('UncleFormFieldImage', UncleFormFieldImage);
        Vue.component('UncleFormFieldEnum', UncleFormFieldEnum);
        Vue.component('UncleFormFieldResource', UncleFormFieldResource);
        Vue.component('UncleFormFieldPhone', UncleFormFieldPhone);
        Vue.component('UncleFormFieldHidden', UncleFormFieldHidden);
        Vue.component('UncleFormFieldDateRangeDistinct', UncleFormFieldDateRangeDistinct);
        Vue.component('UncleFormFieldObject', UncleFormFieldObject);
        Vue.component('UncleFormGroup', UncleFormGroup);
        Vue.component('UncleSummaryGroup', UncleSummaryGroup);
        Vue.component('UncleChip', UncleChip);
        Vue.component('UncleSummaryFieldArrayChiplist', UncleSummaryFieldArrayChiplist);
        Vue.component('UncleSummaryWidgetAbstract', UncleSummaryWidgetAbstract);
        Vue.component('UncleSummaryFieldArrayImage', UncleSummaryFieldArrayImage);  

        Vue.component('file-upload', VueUploadComponent);
        Vue.component('vue-grid', VueGrid);
        Vue.component('vue-cell', VueCell);
        Vue.component('flat-pickr', flatPickr);
        Vue.component('vue-loaders-ball-clip-rotate', VueLoadersBallClipRotate.component);
        Vue.component('vue-loaders-ball-beat', VueLoadersBallBeat.component);
        Vue.component('vue-no-ssr', NoSSR);
        
        if (typeof window != 'undefined') {
            const leaflet = require('leaflet');
            Vue.component('UncleFilterModalFieldResourceMany', UncleFilterModalFieldResourceMany);
            Vue.component('UncleFormFieldGeoAddress', UncleFormFieldGeoAddress);
            Vue.component('UncleFormFieldResourceMany', UncleFormFieldResourceMany);    
            Vue.component('UncleSummaryFieldMap', UncleSummaryFieldMap);
            const Icon = leaflet.Icon;
            delete Icon.Default.prototype._getIconUrl;
            Icon.Default.mergeOptions({
                iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
                iconUrl: require('leaflet/dist/images/marker-icon.png'),
                shadowUrl: require('leaflet/dist/images/marker-shadow.png')
            });
        }
        const validatorProvider = new ValidatorProvider(Vue);
        if (options.validation) {
            validatorProvider.localize(options.validation.language, options.validation.class);
        }
        validatorProvider.init();
        Vue.prototype.$validatorProvider = validatorProvider;
        app.serviceManager.setValidatorProvider(Vue.prototype.$validatorProvider);
        if (options.datepicker) {
            configurationProvider.setDatePickerConfig(options.datepicker);
        }
    }
}