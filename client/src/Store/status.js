import { makeAutoObservable } from "mobx";

class StatusForEvent {
    status = "undefined";

    constructor() {
        makeAutoObservable(this);
    }

    setStatusForEvent(status) {
        this.status = status;
    }   

    getStatusForEvent() {
        return this.status;
    }
}

export default new StatusForEvent();