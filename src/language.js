export default class LanguageProvider{
    constructor() {
        this.labels = {
            it: {
                filtersModalTitle: 'Filtri',
                close: 'Chiudi',
                apply: 'Applica'
            },
            en: {
                filtersModalTitle: 'Filters',
                close: 'Close',
                apply: 'Apply'
            },
            fr: {
                filtersModalTitle: 'Filtres',
                close: 'Près',
                apply: 'Appliquer'
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