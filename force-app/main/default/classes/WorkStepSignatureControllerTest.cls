@isTest
public class WorkStepSignatureControllerTest {
    @isTest
    static void testSaveSignatureWithMock() {
        // Mock the inputs
        String mockWorkStepId = 'a0123456789ABCDEF'; // Mock WorkStep ID
        String mockBase64Data = EncodingUtil.base64Encode(Blob.valueOf('Test Signature Data'));

        // Start the test
        Test.startTest();

        // Call the method with mocked inputs
        try {
            WorkStepSignatureController.saveSignature(mockWorkStepId, mockBase64Data);
        } catch (AuraHandledException e) {
            System.assert(e.getMessage().contains('Insufficient access'), 'Mocked inputs triggered an expected error');
        }

        Test.stopTest();
    }

    @isTest
    static void testSaveSignatureNoWorkOrderWithMock() {
        // Mock the inputs
        String mockWorkStepId = 'a0123456789XYZDEF'; // Mock WorkStep ID
        String mockBase64Data = EncodingUtil.base64Encode(Blob.valueOf('Test Signature Data'));

        // Start the test
        Test.startTest();

        // Call the method and expect an exception due to missing WorkOrder
        try {
            WorkStepSignatureController.saveSignature(mockWorkStepId, mockBase64Data);
            System.assert(false, 'Expected an AuraHandledException for missing WorkOrder');
        } catch (AuraHandledException e) {
            System.assert(e.getMessage().contains('Work Step has no Work Order'), 'Expected exception for missing WorkOrder');
        }

        Test.stopTest();
    }
}