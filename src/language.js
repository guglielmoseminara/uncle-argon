export default class LanguageProvider{
    constructor() {
        this.labels = {
            it: {
                filtersModalTitle: 'Filtri',
                close: 'Chiudi',
                apply: 'Applica',
                validationErrors: 'Sono presenti errori di validazione',
            },
            en: {
                filtersModalTitle: 'Filters',
                close: 'Close',
                apply: 'Apply',
                validationErrors: 'There are validation errors',
            },
            fr: {
                filtersModalTitle: 'Filtres',
                close: 'Près',
                apply: 'Appliquer',
                validationErrors: 'Il y a des erreurs de validation',
            }
        }
        this.locale = 'en';    
    }

    setLocale(locale) {
        if (Object.keys(this.labels).indexOf(locale) != -1 ) {
            this.locale = locale;    
        }
    }
    
    get(key) {
        return this.labels[this.locale][key] ? this.labels[this.locale][key] : '';
    }
}