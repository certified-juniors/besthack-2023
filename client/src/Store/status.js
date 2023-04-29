import { makeAutoObservable } from "mobx";

class Status {
    status = "undefined";

    constructor() {
        makeAutoObservable(this);
    }

    setStatus(status) {
        this.status = status;
    }   

    getStatus() {
        return this.status;
    }
}

export default new Status();