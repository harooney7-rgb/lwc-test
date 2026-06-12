public class shareEmployee {
    
    @AuraEnabled(cacheable=true)
    public static List<Employee__c> getAllEmployees(){
        List<Employee__c> emps= [SELECT Name From Employee__c];
        system.debug(emps);
        return emps;
    }
  
}