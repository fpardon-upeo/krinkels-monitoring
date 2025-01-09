trigger StampOriginalTimes on ServiceAppointment (after insert) {
   List<ServiceAppointment> stampTimes = new List<ServiceAppointment>();
   
   for (ServiceAppointment sa : Trigger.new) {
       ServiceAppointment saToUpdate = new ServiceAppointment(Id = sa.Id);
       
       if (sa.DueDate != null && sa.Original_Due_Date__c == null) {
           saToUpdate.Original_Due_Date__c = sa.DueDate;
       }
       
       if (sa.EarliestStartTime != null && sa.Original_Earliest_Start_Permitted__c == null) {
           saToUpdate.Original_Earliest_Start_Permitted__c = sa.EarliestStartTime;
       }
       
       stampTimes.add(saToUpdate);
   }
   
   if (!stampTimes.isEmpty()) {
       update stampTimes;
   }
}