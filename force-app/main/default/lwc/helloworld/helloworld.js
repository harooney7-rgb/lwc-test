import { LightningElement } from 'lwc';
import getAllEmployees from '@salesforce/apex/shareEmployee.getAllEmployees';

export default class HelloWorld extends LightningElement {

    emps = [];

    connectedCallback(){
         getAllEmployees().then(result=>{
            this.emps = result;
            console.log('All Employees', result)
        }).catch(err=> {
            console.log('Error in calling employees');
        } );
        }
    }
