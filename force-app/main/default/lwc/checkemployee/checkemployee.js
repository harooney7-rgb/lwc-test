import { LightningElement } from 'lwc';
import CheckIfEmployee from '@salesforce/apex/CheckEmployee.Checkifemployee';

export default class CheckEmployee extends LightningElement {

    employeeName=""
    assets=[]

    writeName=(e)=>{
        this.employeeName=e.target.value;
    }

    checkEmployeeExist=()=>{
        CheckIfEmployee({impname:this.employeeName}).then(result=>{
            if(result){
                this.assets = result
                console.log(result)
            }
        })

    }
}