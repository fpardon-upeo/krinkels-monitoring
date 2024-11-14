/**
 * Created by fpardon on 24/10/2024.
 */

@RestResource(urlMapping='/atak/project')
global with sharing class ProjectRestResource {

    @HttpPost
    global static String handlePost() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String returnMessage = '';
        InboundLoggerService.createInboundLog(req.requestBody.toString(), 'Project');
        try {
            ATAKProjectWrapper project = parseBody(req.requestBody.toString());
            returnMessage = ATAKProjectService.createATAKProjects(project);
        } catch (Exception e) {
            res.statusCode = 400;
            return 'Error parsing JSON: ' + e.getMessage();
        }

        res.statusCode = 200;
        return returnMessage;

    }

    private static ATAKProjectWrapper parseBody(String json) {
        ATAKProjectWrapper project = ATAKProjectWrapper.parse(json);
        return project;
    }
}