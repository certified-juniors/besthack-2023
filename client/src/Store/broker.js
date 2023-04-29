import { makeAutoObservable } from "mobx";

class Name {
    constructor() {
        makeAutoObservable( this );
    };
}