import { io } from "socket.io-client";
import { makeAutoObservable, observable } from "mobx";

class Socket {
    socket;
    
    constructor() {
        makeAutoObservable(this);
        this.socket = io("http://localhost:8080");
    }
}

export default new Socket();