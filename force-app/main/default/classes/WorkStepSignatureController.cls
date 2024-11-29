public with sharing class WorkStepSignatureController {
    @AuraEnabled
    public static String saveSignature(String workStepId, String base64Data) {
        try {
            // Check permissions
            if (!Schema.sObjectType.WorkStep.isAccessible() || 
                !Schema.sObjectType.WorkStep.fields.WorkOrderId.isAccessible()) {
                throw new AuraHandledException('Insufficient access to WorkStep');
            }
            
            if (!Schema.sObjectType.ContentVersion.isCreateable() || 
                !Schema.sObjectType.ContentDocumentLink.isCreateable()) {
                throw new AuraHandledException('Insufficient access to create files');
            }

            // 1. Get Work Order ID
            WorkStep ws = [SELECT WorkOrderId FROM WorkStep WHERE Id = :workStepId LIMIT 1];
            if (ws.WorkOrderId == null) {
                throw new AuraHandledException('Work Step has no Work Order');
            }

            // 2. Create ContentVersion with simple filename
            ContentVersion cv = new ContentVersion();
            cv.Title = 'Signature';
            cv.PathOnClient = 'Signature.png';
            cv.VersionData = EncodingUtil.base64Decode(base64Data);
            cv.IsMajorVersion = true;
            cv.Description = 'Signature captured from mobile app';
            
            Database.SaveResult cvResult = Database.insert(cv, false);
            if (!cvResult.isSuccess()) {
                throw new AuraHandledException('Failed to create file: ' + 
                    cvResult.getErrors()[0].getMessage());
            }

            // 3. Get ContentDocument ID
            List<ContentVersion> versions = [
                SELECT ContentDocumentId 
                FROM ContentVersion 
                WHERE Id = :cv.Id 
                LIMIT 1
            ];
            
            if (versions.isEmpty()) {
                throw new AuraHandledException('Failed to retrieve ContentDocument');
            }

            // 4. Create ContentDocumentLink
            ContentDocumentLink cdl = new ContentDocumentLink();
            cdl.LinkedEntityId = ws.WorkOrderId;
            cdl.ContentDocumentId = versions[0].ContentDocumentId;
            cdl.ShareType = 'V';
            cdl.Visibility = 'AllUsers';
            
            Database.SaveResult cdlResult = Database.insert(cdl, false);
            if (!cdlResult.isSuccess()) {
                throw new AuraHandledException('Failed to link file: ' + 
                    cdlResult.getErrors()[0].getMessage());
            }

            return versions[0].ContentDocumentId;
            
        } catch (Exception e) {
            System.debug('Error saving signature: ' + e.getMessage());
            throw new AuraHandledException(e.getMessage());
        }
    }
}