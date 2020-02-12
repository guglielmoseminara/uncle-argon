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
                const action = this.vue.prototype.$uncle.getAction(ref.action); 
                var params = {};
                params[ref.uniqueField] = value;
                const actionResult = await action.execute(params);
                const data = actionResult.getData();
                var result = true;
                if (data) {
                    if (ref.targetValue) {
                        for (let i = 0; i < data.length; i++) {
                            if (data[i][ref.targetField]) {
                                if (data[i][ref.targetField] != ref.targetValue) {
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
                return !data;
            },
            options: { },
            paramNames: ['action', 'oldPasswordField'],
            getMessage(field, params, data) {
                console.log(checkOldPasswordDictionary[Validator.locale](field));
                return checkOldPasswordDictionary[Validator.locale](field);
            }
        }
        Validator.extend("check_old_password", checkOldPasswordRule);

    }
}