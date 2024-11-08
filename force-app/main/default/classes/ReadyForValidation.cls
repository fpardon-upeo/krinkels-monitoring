public with sharing class ReadyForValidation {
  @AuraEnabled
  public static void setReadyForValidation(Id recordId) {
    ServiceContract sc = [
      SELECT Id, ApprovalStatus
      FROM ServiceContract
      WHERE Id = :recordId
    ];

    try {
      sc.ApprovalStatus = 'In Approval Process';
      update sc;
    } catch (Exception e) {
      throw new AuraHandledException(
        'Error setting record to Ready for Validation: ' + e.getMessage()
      );
    }
  }
}