export default class ConfigurationProvider{
    constructor() {
        this.datePickerConfig = {}    
    }
    
    setDatePickerConfig(config) {
        this.datePickerConfig = config;
    }

    getDatePickerConfig() {
        return this.datePickerConfig;
    }
}