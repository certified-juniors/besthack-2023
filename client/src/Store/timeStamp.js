import { makeAutoObservable } from "mobx";

class TimeStamp {
    resTimeCommand;

    constructor() {
        makeAutoObservable(this);
    }

    setResTimeCommand(timestamp) {
        return timestamp - this.resTimeCommand;
    }
}

export default new TimeStamp();