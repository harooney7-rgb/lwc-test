public class GetAssets {

    @AuraEnabled(cacheable=true)
    public static List<Talent_Asset__c> getAllAssets(){
        List<Talent_Asset__c> assets= [SELECT Name, Asset_Status__c, Asset_Type__c from Talent_Asset__c];
        system.debug(assets);
        return assets;
    }
}