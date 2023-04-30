import { makeAutoObservable } from "mobx";

class Data {
    matrix;

    constructor () {
        makeAutoObservable(this);

    }

}