public with sharing class AccountWasteRetriever {
    @InvocableMethod(label='Retrieve Accounts by Waste Types' description='Fetch accounts matching all selected waste types')
    public static List<List<Account>> getAccountsByWasteTypes(List<RequestWrapper> requests) {
        // Initialize an empty list to hold accounts
        List<Account> accounts = new List<Account>();
        
        // Loop through the requests (usually one in this case)
        for (RequestWrapper request : requests) {
            if (request.wasteTypes != null && !request.wasteTypes.isEmpty()) {
                // Dynamic SOQL to find accounts that match ALL selected waste types
                String query = 'SELECT Id, Name, Type_of_Waste__c, Contract__c, ShippingCity, ShippingPostalCode ' +
                               'FROM Account ' +
                               'WHERE Sub_Type__c = \'Waste Depot\'';
                
                // Add conditions to include each waste type
                for (Integer i = 0; i < request.wasteTypes.size(); i++) {
                    query += ' AND Type_of_Waste__c INCLUDES (\'' + request.wasteTypes[i] + '\')';
                }
                
                // Execute the query and cast the result to List<Account>
                accounts.addAll((List<Account>)Database.query(query));
            }
        }
        
        // Return the accounts as a collection
        return new List<List<Account>>{accounts};
    }
    
    // Wrapper class for input variables
    public class RequestWrapper {
        @InvocableVariable(required=true description='List of selected waste types')
        public List<String> wasteTypes;
    }
}