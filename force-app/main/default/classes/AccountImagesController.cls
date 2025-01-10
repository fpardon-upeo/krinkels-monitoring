public with sharing class AccountImagesController {
    public class ImageWrapper {
        @AuraEnabled public String Id;
        @AuraEnabled public String Title;
        @AuraEnabled public String base64Data;
    }

    private static final Integer MAX_STRING_LENGTH = 1000000; // ~1MB after base64 encoding

    @AuraEnabled
    public static List<ImageWrapper> getAccountImages(Id accountId) {

        System.debug('Account Id: ' + accountId);

        List<ContentDocumentLink> links = [
                SELECT ContentDocumentId
                FROM ContentDocumentLink
                WHERE LinkedEntityId = :accountId
        ];

        Set<Id> documentIds = new Set<Id>();
        for(ContentDocumentLink link : links) {
            documentIds.add(link.ContentDocumentId);
        }

        List<ContentVersion> versions = [
                SELECT Id, Title, VersionData, FileType, ContentDocumentId
                FROM ContentVersion
                WHERE ContentDocumentId IN :documentIds
                AND IsLatest = true
                AND FileType IN ('PNG', 'JPG', 'JPEG', 'GIF')
                ORDER BY LastModifiedDate DESC
                LIMIT 10
        ];

        List<ImageWrapper> wrappers = new List<ImageWrapper>();

        for(ContentVersion version : versions) {
            try {
                ImageWrapper wrapper = new ImageWrapper();
                wrapper.Id = version.ContentDocumentId;
                wrapper.Title = version.Title;

                // Convert the image to base64
                String base64 = EncodingUtil.base64Encode(version.VersionData);

                // If the base64 string is too long, truncate it
                if (base64.length() > MAX_STRING_LENGTH) {
                    base64 = base64.substring(0, MAX_STRING_LENGTH);
                }

                wrapper.base64Data = 'data:image/' + version.FileType.toLowerCase() + ';base64,' + base64;
                wrappers.add(wrapper);

            } catch(Exception e) {
                System.debug('Error processing image: ' + version.Title + ' - ' + e.getMessage());
                continue;
            }
        }

        System.debug('Wrappers: ' + wrappers);

        return wrappers;
    }
}