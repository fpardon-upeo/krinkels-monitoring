/**
 * Created by fpardon on 18/11/2024.
 */

public with sharing class OutboundLoggerService {

    // Static variable to cache the logging enabled setting
    private static Boolean isLoggingEnabled;

    // Getter method to check if logging is enabled
    public static Boolean getIsLoggingEnabled() {
        if (isLoggingEnabled == null) {
            // Get the custom setting for the current user context
            Logger_Settings__c settings = Logger_Settings__c.getInstance();
            isLoggingEnabled = settings != null ? settings.Enable_Outbound_Logs__c : false;
        }
        return isLoggingEnabled;
    }

    public static void createOutboundLog(String messageBody, String messageError) {
        if (getIsLoggingEnabled()) {
            try {
                // Create a new Inbound Log record
                Outbound_Log__c log = new Outbound_Log__c();
                log.JSON_Body__c = messageBody;
                log.Error_Message__c = messageError;
                insert log;
            } catch (Exception e) {
                // Log the exception
                System.debug('Error creating inbound log: ' + e.getMessage());
            }
        }
    }

}