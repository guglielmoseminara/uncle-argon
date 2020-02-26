import { Validator } from 'vee-validate';

export default class ValidatorProvider {

    constructor(Vue) {
        this.vue = Vue;
    }

    localize(language, localizeClass) {
        Validator.localize(language, localizeClass);
    }

    init() {
        Validator.extend('alpha_spaces_points', {
            validate: (value) => {
                var regex = new RegExp(/^[A-Za-z .]+$/u);
                return regex.test(value);
            }
        });
        const uniqueDictionary = {
            en: (field) => `${field} is already present`,
            fr: (field) => `${field} est déjà présent`,
            it: (field) => `${field} è già presente`,
        }
        const extendOptions = { hasTarget: true };
        const uniqueRule = {
            validate: async (value, ref) => {
                const targetFieldContainer = document.querySelectorAll(`[name$='${ref.targetValue}']`);
                var result = true;
                if (targetFieldContainer.length > 0) {
                    const targetField = targetFieldContainer[0].querySelector(`[name='${ref.targetField}']`);
                    const action = this.vue.prototype.$uncle.getAction(ref.action); 
                    var params = {};
                    params[ref.uniqueField] = value;
                    const actionResult = await action.execute(params);
                    const data = actionResult.getData();
                    if (data) {
                        if (targetField.value) {
                            for (let i = 0; i < data.length; i++) {
                                if (data[i][ref.targetField]) {
                                    if (data[i][ref.targetField] != targetField.value) {
                                        result = false;
                                    }
                                }
                            }
                        } else {
                            if (data.length > 0) {
                                result = false;
                            }
                        }    
                    } else {
                        result = false;
                    }    
                }
                return result;
            },
            options: extendOptions,
            paramNames: ['targetValue', 'targetField', 'action', 'uniqueField'],
            getMessage(field, params, data) {
                return uniqueDictionary[Validator.locale](field);
            }
        }
        Validator.extend("unique", uniqueRule);
        const checkOldPasswordDictionary = {
            en: (field) => `${field} is different than actual password`,
            fr: (field) => `${field} est différent du mot de passe actuel`,
            it: (field) => `${field} è differente dalla password attuale`,
        }
        const checkOldPasswordRule = {
            validate: async (value, ref) => {
                const action = this.vue.prototype.$uncle.getAction(ref.action); 
                var params = {};
                params[ref.oldPasswordField] = value;
                const actionResult = await action.execute(params);
                const data = actionResult.getData();
                return data;
            },
            options: { },
            paramNames: ['action', 'oldPasswordField'],
            getMessage(field, params, data) {
                return checkOldPasswordDictionary[Validator.locale](field);
            }
        }
        Validator.extend("check_old_password", checkOldPasswordRule);
        const validPriceDictionary = {
            en: (field) => `${field} is not a valid price`,
            fr: (field) => `${field} ce n'est pas un prix valable`,
            it: (field) => `${field} non è un prezzo valido`,
        }
        const priceRule = {
            validate: (value) => {
                const regex = /^\d{0,8}(\.\d{1,4})?$/gm;
                return regex.test(value);
            },
            options: { },
            paramNames: [],
            getMessage(field, params, data) {
                return validPriceDictionary[Validator.locale](field);
            }
        }
        Validator.extend("price", priceRule);
        const equalDictionary = {
            en: (field, toField) => `${field} is not equal to ${toField}`,
            fr: (field, toField) => `${field} n'est pas égal à ${toField}`,
            it: (field, toField) => `${field} non è uguale a ${toField}`,
        }
        const equalRule = {
            validate: (value, ref) => {
                const equalFieldContainer = document.querySelectorAll(`[name$='${ref.targetValue}']`);
                var result = true;
                if (equalFieldContainer.length > 0) {
                    const targetField = equalFieldContainer[0].querySelector(`[name='${ref.targetField}']`);
                    if (targetField) {
                        if (value == targetField.value) {
                            result = true;
                        } else {
                            result = false;
                        }
                    }
                }
                return result;
            },
            options: { },
            paramNames: ['targetValue', 'targetField'],
            getMessage(field, params, data) {
                return equalDictionary[Validator.locale](field, params[1]);
            }
        }
        Validator.extend("equal", equalRule);
    }
}