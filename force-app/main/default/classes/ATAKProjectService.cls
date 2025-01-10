/**
 * Created by fpardon on 05/11/2024.
 */

public with sharing class ATAKProjectService {

    public static String createATAKProjects(ATAKProjectWrapper projects) {
        System.debug('ATAKProjectService.createATAKProject');
        List<ATAK_Project__c> atakProjects = new List<ATAK_Project__c>();
        for(ATAKProjectWrapper.Data projectData : projects.data) {
            ATAK_Project__c atakProject = createSingleATAKProject(projectData);
            atakProjects.add(atakProject);
        }

        Database.UpsertResult[] results = Database.upsert(atakProjects, ATAK_Project__c.Fields.SubProject_ATAK__c, false);
        Integer successCount = 0;
        Integer errorCount = 0;
        for(Database.UpsertResult result : results) {
            if(!result.isSuccess()) {
                for(Database.Error error : result.getErrors()) {
                    System.debug('Error: ' + error.getMessage());
                    errorCount++;
                }
            } else {
                successCount++;
            }
        }

        for(ATAKProjectWrapper.Data projectData : projects.data) {
            createSingleFinancialAccount(projectData);
        }

        return 'Success: ' + successCount + ' Error: ' + errorCount + ' Total: ' + results.size() + ' processed.';

    }

    public static ATAK_Project__c createSingleATAKProject(ATAKProjectWrapper.Data projectData) {
        System.debug('ATAKProjectService.createATAKProject');
        System.debug('projectData: ' + projectData.projectcode);
        ATAK_Project__c atakProject = new ATAK_Project__c();
        atakProject.Name = projectData.projectcode;
        atakProject.Subproject_Name__c = projectData.project_description;
        atakProject.SubProject_ATAK__c = projectData.projectcode;
        atakProject.Cost_centre_Atak_Id__c = projectData.costcenter_code;
        atakProject.Cost_centre_Atak_Name__c = projectData.costcenter_name;
        atakProject.Department_Code__c = projectData.department_code;
        atakProject.Department_Name__c = projectData.department_name;
        atakProject.Discipline__c = projectData.dim_discipline;
        atakProject.Language__c = projectData.dim_language;
        //atakProject.Region__c = projectData.dim_region; --> To be added once available in the JSON
        atakProject.Dossier__c = projectData.dossier;
        atakProject.Depot__c = projectData.depot_code;
        atakProject.Start_Date__c = projectData.project_startdate != '' && projectData.project_startdate != null ? Date.valueOf(projectData.project_startdate) : null;
        atakProject.End_Date__c = projectData.project_enddate != '' && projectData.project_enddate != null ? Date.valueOf(projectData.project_enddate) : null;
        atakProject.ATAK_Creation_Date__c = projectData.project_create_date != '' && projectData.project_create_date != null ? Date.valueOf(projectData.project_create_date) : null;

        for(ATAKProjectWrapper.Projectfunctionaris projectfunctionaris : projectData.projectfunctionaris) {
            if(projectfunctionaris.func_type == 'Werfleider') {
                atakProject.Site_Manager_Code__c = projectfunctionaris.func_initial;
                //atakProject.Owner = new User(ATAK_Code__c = projectfunctionaris.func_initial);
            }
        }

        System.debug('ATAKProjectService.createATAKProject - atakProject: ' + atakProject);
        return atakProject;
    }

    public static void createSingleFinancialAccount(ATAKProjectWrapper.Data projectData){

        List<Account> accounts = new List<Account>();
        List<ATAK_Project_Financial_Account__c> atakProjectFinancialAccounts = new List<ATAK_Project_Financial_Account__c>();

        String recordtType = Schema.SObjectType.Account.getRecordTypeInfosByName().get('Financial Account').getRecordTypeId();

        for(ATAKProjectWrapper.Adrescodes adrescode : projectData.adrescodes){
            System.debug('ATAKProjectService.createSingleFinancialAccount - adrescode: ' + adrescode.project_addresscode);
            Account acc = new Account();
            acc.Name = adrescode.project_addresscode;
            acc.RecordTypeId = recordtType;
            acc.Account_ATAK_Code__c = adrescode.project_addresscode;
            acc.Financial_External_Id__c = adrescode.project_addresscode;
            accounts.add(acc);

            ATAK_Project_Financial_Account__c atakProjectFinancialAccount = new ATAK_Project_Financial_Account__c();
            atakProjectFinancialAccount.Name = projectData.projectcode + ' - ' + adrescode.project_addresscode;
            atakProjectFinancialAccount.ATAK_Project__r = new Atak_Project__c(SubProject_ATAK__c = projectData.projectcode);
            atakProjectFinancialAccount.Account__r = new Account(Financial_External_Id__c = adrescode.project_addresscode);
            atakProjectFinancialAccount.External_Id__c = projectData.projectcode + adrescode.project_addresscode;
            atakProjectFinancialAccounts.add(atakProjectFinancialAccount);

        }

        Database.UpsertResult[] results = Database.upsert(accounts, Account.Fields.Financial_External_Id__c, false);
        Integer successCountAccts = 0;
        Integer errorCountAccts = 0;
        for(Database.UpsertResult result : results) {
            if(!result.isSuccess()) {
                for(Database.Error error : result.getErrors()) {
                    System.debug('Error creating Fin Account: ' + error.getMessage());
                    errorCountAccts++;
                }
            } else {
                successCountAccts++;
            }
        }

        Database.UpsertResult[] results2 = Database.upsert(atakProjectFinancialAccounts, ATAK_Project_Financial_Account__c.Fields.External_Id__c, false);
        Integer successCountProjAcc = 0;
        Integer errorCountProjAcc = 0;
        for(Database.UpsertResult result : results2) {
            if(!result.isSuccess()) {
                for(Database.Error error : result.getErrors()) {
                    System.debug('Error creating Fin Acc to Project link: ' + error.getMessage());
                    errorCountProjAcc++;
                }
            } else {
                successCountProjAcc++;
            }
        }
    }

}