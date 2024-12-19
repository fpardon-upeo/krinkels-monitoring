/**
 * Created by Frederik on 12/18/2024.
 */

@IsTest
private class ServiceResourceHandlerTest {
    @IsTest
    static void testCreateServiceResource() {

        ATAK_Personnel__c personnel = new ATAK_Personnel__c();
        personnel.Name = 'Test Name';
        personnel.Department_Name__c = 'Landscaping - Billing plan';
        personnel.Email__c = generateRandomEmail();
        personnel.First_Name__c = 'Karel';
        personnel.Last_Name__c = 'Krinkels';
        personnel.Phone__c = '0612345678';
        personnel.Code__c = '123qas';

        insert personnel;

        Test.startTest();
        personnel.Create_Service_Resource__c = true;
        update personnel;
        Test.stopTest();

    }

    private static string generateRandomEmail() {
        return 'test' + String.valueOf(Datetime.now().getTime()) + '@testkrinkels.com';
    }
}