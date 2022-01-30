import { api, LightningElement,track,wire } from 'lwc';
import getAccount from '@salesforce/apex/searchAccount.getAccounts'

export default class SearchAccount extends LightningElement 
{
@track store=[];



@track searchKey;
@wire (getAccount,{strAccountName: '$searchKey'}) accounts;

handleKeyChange(event){
this.searchKey = event.target.value;
}


/*getval(event){
debugger;

 this.store.push(event.target.label);
// this.store=event.target.label;
// this.store.push[this.val];

console.log(JSON.stringify(this.store));
alert(this.store);
}

name;
remove(event){
    this.name = event.detail.item.label;
    alert(label + ' pill was removed!');
    const index = event.detail.index;
    this.store.splice(index, 1);
}*/

}