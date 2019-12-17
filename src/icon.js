export default class IconsProvider{
    constructor() {
        this.icons = {
            'trash': 'fas fa-trash',
            'edit': 'fas fa-edit',
            'add': 'fas fa-plus',
            'show': 'fas fa-eye',
            'users': 'fas fa-users',
            'bag': 'fas fa-briefcase',
            'tags': 'fas fa-tags',
            'marker': 'fas fa-map-marker-alt',
            'shapes': 'fas fa-shapes',
            'mail': 'ni ni-email-83',
            'lock': 'ni ni-lock-circle-open'
        }    
    }
    
    get(icon) {
        return this.icons[icon];
    }
}