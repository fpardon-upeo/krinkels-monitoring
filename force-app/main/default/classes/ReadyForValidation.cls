public with sharing class ReadyForValidation {
  @AuraEnabled
  public static void setReadyForValidation(Id recordId) {
    ServiceContract sc = [
      SELECT Id, ApprovalStatus
      FROM ServiceContract
      WHERE Id = :recordId
    ];

    //Should it be done only if status if = Draft or even if it in not?
    if (sc.ApprovalStatus == 'Draft') {
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
}