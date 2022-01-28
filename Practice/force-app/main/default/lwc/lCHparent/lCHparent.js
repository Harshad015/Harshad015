import { LightningElement } from 'lwc';

export default class LCHparent extends LightningElement {
constructor(){
    super()
    console.log("constructor is loaded");
}

renderedCallback(){
    console.log("Render callBack is renderd");
}

connectedCallback(){
    console.log("Connected callback is rendered UPsated");
}

errorCallback(error,stack){
console.log(error.message);
console.log(stack);
}
name;
changehand(event){
this.name=event.target.value;
}

isChildVisible = false;
pressmi(event){
this.isChildVisible = ! this.isChildVisible;
}
}