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
        Account acc = [SELECT OperatingHoursId FROM Account WHERE Id = :accountId LIMIT 1];

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
    public static void createFeedbackPost(Id accountId, String feedbackText) {

        //First get the current User Manager Id so we can @mention them in the post
        User manager = [SELECT Id FROM User WHERE Id = :UserInfo.getUserId() LIMIT 1];

        String newFeedbackText = '@[' + manager.Id + '] - ' + feedbackText;

        // Create a FeedItem (Chatter Post)
        FeedItem post = new FeedItem();
        post.ParentId = accountId;  // The Account where the post will appear
        post.Body = newFeedbackText;
        post.Type = 'TextPost';

        try {
            insert post;
        } catch (Exception e) {
            throw new AuraHandledException('Error creating feedback post: ' + e.getMessage());
        }
    }
}