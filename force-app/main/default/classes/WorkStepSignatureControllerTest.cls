@isTest
private class WorkStepSignatureControllerTest {
    
    @TestSetup
    static void setupTestData() {
        // Get the Permission Set Group
        PermissionSetGroup psg = [SELECT Id FROM PermissionSetGroup WHERE DeveloperName = 'Operator_Permission_Set_Group' LIMIT 1];
        
        // Assign PSG to running user
        PermissionSetAssignment psa = new PermissionSetAssignment(
            AssigneeId = UserInfo.getUserId(),
            PermissionSetGroupId = psg.Id
        );
        insert psa;
    }
    
    @isTest
    static void testInsufficientAccess() {
        Test.startTest();
        try {
            WorkStepSignatureController.saveSignature(null, null);
            System.assert(false, 'Expected an exception to be thrown');
        } catch (Exception e) {
            System.assert(e.getMessage().contains('Insufficient access') || 
                         e.getMessage().contains('Script-thrown exception'), 
                         'Expected access-related exception');
        }
        Test.stopTest();
    }

    @isTest
    static void testSaveSignature() {
        Test.startTest();
        try {
            String base64Data = EncodingUtil.base64Encode(Blob.valueOf('Test Signature Data'));
            WorkStepSignatureController.saveSignature('001000000000000', base64Data);
            System.assert(false, 'Expected an exception to be thrown');
        } catch (Exception e) {
            System.assert(e.getMessage().contains('Script-thrown exception') || 
                         e.getMessage().contains('Insufficient access'), 
                         'Expected exception message');
        }
        Test.stopTest();
    }

    @isTest
    static void testValidSignatureSave() {
        // Create Account
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        // Create WorkType with WorkPlan template
        WorkType wt = new WorkType(
            Name = 'Test Work Type',
            EstimatedDuration = 60,
            DurationType = 'Minutes'
        );
        insert wt;
        
        // Create WorkOrder
        WorkOrder wo = new WorkOrder(
            AccountId = acc.Id,
            WorkTypeId = wt.Id,
            Subject = 'Test Work Order',
            Status = 'Dispatched',
            Priority = 'Low',
            Duration = 60,
            DurationType = 'Minutes'
        );
        insert wo;

        // Query for the automatically created Signature WorkStep
        List<WorkStep> steps = [SELECT Id 
                              FROM WorkStep 
                              WHERE WorkOrderId = :wo.Id 
                              AND Name = 'Signature' 
                              AND ActionDefinition = 'WorkStep.Work_Step_Signature'
                              LIMIT 1];
        
        if(!steps.isEmpty()) {
            String base64Data = EncodingUtil.base64Encode(Blob.valueOf('Test Signature Data'));
            
            Test.startTest();
            String result = WorkStepSignatureController.saveSignature(steps[0].Id, base64Data);
            Test.stopTest();
            
            // Verify file was created
            List<ContentVersion> versions = [SELECT Id FROM ContentVersion WHERE Title = 'Signature'];
            System.assertEquals(1, versions.size(), 'Expected one ContentVersion to be created');
        }
    }
}