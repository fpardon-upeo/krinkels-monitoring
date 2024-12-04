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

    // Create a ConnectApi.FeedItemInput object
    ConnectApi.FeedItemInput feedItemInput = new ConnectApi.FeedItemInput();
    ConnectApi.MessageBodyInput messageInput = new ConnectApi.MessageBodyInput();
    ConnectApi.TextSegmentInput textSegment = new ConnectApi.TextSegmentInput();
    ConnectApi.MentionSegmentInput mentionSegment = new ConnectApi.MentionSegmentInput();

    messageInput.messageSegments = new List<ConnectApi.MessageSegmentInput>();

    // Add the mention
    mentionSegment.id = st.Main_Responsible__c;
    messageInput.messageSegments.add(mentionSegment);

    // Add the text
    textSegment.text = ' - ' + feedbackText;
    messageInput.messageSegments.add(textSegment);

    feedItemInput.body = messageInput;
    feedItemInput.feedElementType = ConnectApi.FeedElementType.FeedItem;
    feedItemInput.subjectId = accountId;

    try {
      ConnectApi.FeedElement feedElement = ConnectApi.ChatterFeeds.postFeedElement(
        Network.getNetworkId(),
        feedItemInput
      );
    } catch (Exception e) {
      throw new AuraHandledException(
        'Error creating feedback post: ' + e.getMessage()
      );
    }
  }
}