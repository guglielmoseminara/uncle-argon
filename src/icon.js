export default class IconsProvider{
    constructor() {
        this.icons = {
            'trash': 'delete',
            'edit': 'edit',
            'add': 'add',
            'show': 'fas fa-eye',
            'users': 'fas fa-users',
            'bag': 'fas fa-briefcase',
            'tags': 'fas fa-tags',
            'marker': 'fas fa-map-marker-alt',
            'shapes': 'fas fa-shapes', 
        }    
    }
    
    get(icon) {
        return this.icons[icon];
    }
}