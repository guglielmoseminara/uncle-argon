export default class ActionsProvider{
    
    constructor(router) {
        this.router = router;
    }
    
    execute(action, params) {
        if (action.type == 'nav') {
            this.router.push({ name: action.route.name, params: params });
        } else if (action.type == 'sdk') {
            action.execute();
        }
    }
}