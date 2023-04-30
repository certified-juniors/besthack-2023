import { io } from "socket.io-client";
import { makeAutoObservable } from "mobx";

class Socket {
    socket;
    
    constructor() {
        makeAutoObservable(this);
        this.socket = io("http://localhost:8080");
        this.pause = false;
    }
}

export default new Socket();