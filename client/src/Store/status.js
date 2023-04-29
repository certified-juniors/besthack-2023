import { makeAutoObservable } from "mobx";

class Status {
    status = "undefined";

    constructor() {
        makeAutoObservable(this);
    }

    getStatus() {
        return this.status;
    }
}

export default new Status();