import { makeAutoObservable } from "mobx";

class Name {
    name = "undefined"

    constructor() {
        makeAutoObservable( this );
    };

    getName() {
        return this.name;
    }
}

export default new Name();