/**
 * Created by fpardon on 27/05/2024.
 */

trigger ContentDocumentTrigger on ContentDocumentLink (after insert) {

    //Very quick and dirty trigger for the PoC

    if(Trigger.isAfter && Trigger.isInsert){
        List<ContentDocumentLink> contentDocumentLinks = Trigger.new;
        List<ContentVersion> contentVersions = new List<ContentVersion>();
        List<String> workstepIds = new List<String>();

        for(ContentDocumentLink cdl : contentDocumentLinks){
            if(String.valueOf(cdl.LinkedEntityId).startsWith('0hF')){
                workstepIds.add(cdl.LinkedEntityId);
            }
        }

        System.debug('workstepIds: ' + workstepIds);

        List<WorkStep> worksteps = [SELECT Id, ParentRecordId FROM WorkStep WHERE Id IN :workstepIds];
        List<ContentDocumentLink> newLinks = new List<ContentDocumentLink>();
        for(WorkStep ws : worksteps){
            ws.Status = 'Completed';
            for(ContentDocumentLink cdl : contentDocumentLinks){
                if(cdl.LinkedEntityId == ws.Id){
                    ContentDocumentLink newLink = new ContentDocumentLink();
                    newLink.ContentDocumentId = cdl.ContentDocumentId;
                    newLink.LinkedEntityId = ws.ParentRecordId;
                    newLink.ShareType = 'V';
                    newLink.Visibility = 'AllUsers';
                    newLinks.add(newLink);
                }
            }
        }

        insert newLinks;
        update worksteps;
    }
}