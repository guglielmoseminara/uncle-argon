export default class ModalProvider {
    
    constructor(eventHub) {
        this.eventHub = eventHub;
    }
    
    open(modalId) {
        this.eventHub.$emit('opened', {
            visible: true,
            modalId: modalId
        });
    }

    close() {
        this.eventHub.$emit('opened', {
            visible: false
        });
    }


}