export default class IconsProvider{
    constructor() {
        this.icons = {
            'trash': 'fas fa-trash',
            'edit': 'fas fa-edit',
            'add': 'fas fa-plus',
            'show': 'fas fa-eye',
            'users': 'fas fa-users',
            'user': 'fas fa-user',
            'bag': 'fas fa-briefcase',
            'tags': 'fas fa-tags',
            'marker': 'fas fa-map-marker-alt',
            'shapes': 'fas fa-shapes',
            'mail': 'ni ni-email-83',
            'lock': 'ni ni-lock-circle-open',
            'folder_plus': 'fas fa-folder-plus',
            'bookmark': 'fas fa-bookmark',
            'flag': 'fas fa-flag',
            'file_alt':'fas fa-file-alt',
            'send':'fas fa-paper-plane',
            'download': 'fas fa-download',
            'check': 'fas fa-check',
            'images': 'fas fa-images',
            'logout': 'fas fa-sign-out-alt',
            'save': 'fas fa-save'
        }    
    }
    
    get(icon) {
        return this.icons[icon];
    }
}