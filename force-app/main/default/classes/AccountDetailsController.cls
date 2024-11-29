/**
 * Created by Frederik on 11/21/2024.
 * Description:
 * Change Log:
 * Dependencies:
 */

public with sharing class AccountDetailsController {
  @AuraEnabled(cacheable=true)
  public static List<TimeSlot> getTimeSlots(Id accountId) {
    List<TimeSlot> timeSlots = new List<TimeSlot>();

    // Get the Operating Hours ID from the Account
    Account acc = [
      SELECT OperatingHoursId
      FROM Account
      WHERE Id = :accountId
      LIMIT 1
    ];

    if (acc.OperatingHoursId != null) {
      timeSlots = [
        SELECT DayOfWeek, StartTime, EndTime
        FROM TimeSlot
        WHERE OperatingHoursId = :acc.OperatingHoursId
        ORDER BY DayOfWeek, StartTime
      ];
    }

    return timeSlots;
  }

  @AuraEnabled(cacheable=true)
  public static List<ContentDocument> getContentDocuments(Id accountId) {
    List<ContentDocumentLink> contentLinks = [
      SELECT ContentDocumentId
      FROM ContentDocumentLink
      WHERE LinkedEntityId = :accountId
    ];

    Set<Id> documentIds = new Set<Id>();
    for (ContentDocumentLink link : contentLinks) {
      documentIds.add(link.ContentDocumentId);
    }

    return [
      SELECT Id, Title, FileExtension, ContentSize
      FROM ContentDocument
      WHERE Id IN :documentIds
      ORDER BY LastModifiedDate DESC
    ];
  }

  @AuraEnabled
  public static void createFeedbackPost(
    Id workOrderId,
    Id accountId,
    String feedbackText
  ) {
    // //First get the current User Manager Id so we can @mention them in the post
    // User currentUser = [
    //   SELECT Id, ManagerId
    //   FROM User
    //   WHERE Id = :UserInfo.getUserId()
    //   LIMIT 1
    // ];

    // //Get the Atak Project field of the Account t
    // Account acc = [
    //   SELECT Id, ATAK_Project__c
    //   FROM Account
    //   WHERE Id = :accountId
    //   LIMIT 1
    // ];

    // //Get the ATAK Project record based on the lookup field
    // ATAK_Project__c atakProject = [
    //   SELECT Id, Name, OwnerId
    //   FROM ATAK_Project__c
    //   WHERE Id = :acc.ATAK_Project__c
    //   LIMIT 1
    // ];

    //Get the Service Territory lookup field of the Work Order
    WorkOrder wo = [
      SELECT Id, ServiceTerritoryId
      FROM WorkOrder
      WHERE Id = :workOrderId
      LIMIT 1
    ];

    //Get Main Responsible of the Service Territory
    ServiceTerritory st = [
      SELECT Id, Main_Responsible__c
      FROM ServiceTerritory
      WHERE Id = :wo.ServiceTerritoryId
      LIMIT 1
    ];

    String newFeedbackText =
      '@[' +
      st.Main_Responsible__c +
      '] - ' +
      feedbackText;

    // Create a FeedItem (Chatter Post)
    FeedItem post = new FeedItem();
    post.ParentId = accountId;
    post.Body = newFeedbackText;
    post.Type = 'TextPost';

    try {
      insert post;
    } catch (Exception e) {
      throw new AuraHandledException(
        'Error creating feedback post: ' + e.getMessage()
      );
    }
  }
}