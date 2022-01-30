import { api, LightningElement,track } from 'lwc';

export default class DisplayAccout extends LightningElement {

@api list;

@track store=[];

getLabelName;
@track check = false;

getval(event){
debugger;
console.log("values " + event.target.value);


//this.store.push(event.target.label);
// this.store=event.target.label;
// this.store.push[this.val];
this.store.push(event.target.label);

console.log(typeof(this.store));
console.log(this.store[0])
alert(this.store);
}

removePillItem(event) {

const pillIndex = event.detail.index ? event.detail.index : event.detail.name;
// console.log(pillIndex);

const itempill = this.store;
itempill.splice(pillIndex, 1);       
this.store = [...itempill];

//console.log(pillIndex, this.labelItems);
console.log("StoreName " + this.store[0]);
this.getLabelName = event.target.label;
console.log(this.getLabelName);
if(this.getLabelName == this.store){
   console.log("woek it fine");
   
   this.store.value = false;
}

}

getLabel(event){
this.getLabelName=event.target.label;
console.log(this.getLabelName);
}
}