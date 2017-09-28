import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import ActionConstants from '../constants/actions';

class NotificationStore extends EventEmitter {

    constructor() {
        super();

        this.message = '';
        this.pushNotification = this.pushNotification.bind(this);
    }

    pushNotification(message) {
        this.message = message;
        this.emit('change')
    }

    getMessage() {
        return this.message;
    }

    handleActions(action) {
        switch (action.type) {
            case ActionConstants.Project_Added_Message: {
                console.log(action);
                this.pushNotification(action.value);
            }
            default: {
                break;
            }
        }
    }
}

const notificationStore = new NotificationStore();
dispatcher.register(notificationStore.handleActions.bind(notificationStore));
export default notificationStore;