export default class ModalProvider {
    
    constructor(eventHub) {
        this.eventHub = eventHub;
    }
    
    open(modalId, params = {}) {
        this.eventHub.$emit('opened', {
            visible: true,
            modalId: modalId,
            params: params
        });
    }

    close(modalId) {
        this.eventHub.$emit('opened', {
            visible: false,
            modalId: modalId
        });
    }


}