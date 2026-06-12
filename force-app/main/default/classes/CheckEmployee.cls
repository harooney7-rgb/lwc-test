public with sharing class CheckEmployee{

@AuraEnabled(cacheable=true)
    public static List<Talent_Asset__c> Checkifemployee(string impname){
        
        List<Employee__c> emps=[SELECT Name,Id from Employee__c WHERE Name =: impname];
        List<Talent_Asset__c> assets =[SELECT Name,Asset_Type__c,Asset_Status__c from Talent_Asset__c where Employee__c  =: emps[0].Id ];
        
        System.debug(assets);
        return assets;
    }
        
    }