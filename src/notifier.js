export default class Notifier {

    constructor(notifier) {
        this.notifier = notifier;
    }

    success(text) {
        this.notifier.success(text, {
            position: 'top-right'
        });
    }

    error(text) {
        this.notifier.error(text, {
            position: 'top-right'
        });
    }

}