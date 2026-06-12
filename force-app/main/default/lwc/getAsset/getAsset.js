import { LightningElement } from 'lwc';
import getAllAssets from '@salesforce/apex/GetAssets.getAllAssets';

export default class GetAsset extends LightningElement {
      assets = [];
    
        connectedCallback(){
             getAllAssets().then(result=>{
                this.assets = result;
                console.log('All Assets', result)
            }).catch(err=> {
                console.log('Error in calling Assets');
            } );
            }
}