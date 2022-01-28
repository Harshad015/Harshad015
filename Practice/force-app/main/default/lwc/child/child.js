import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    constructor(){
        super()
        console.log("child constructor is loaded");
    }

    renderedCallback(){
        console.log("child Render callBack is renderd");
    }
    
    connectedCallback(){
        console.log("child Connected callback is rendered UPsated");
        throw new Error("loading of child component faild");
    }
    disconnectedCallback(){
        alert("Disconnected callback is call!!")
    }
}