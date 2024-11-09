trigger ServiceContractTrigger on ServiceContract(after update) {
  if (Trigger.isAfter && Trigger.isUpdate) {
    ServiceContractTriggerHandler.handleApprovalStatusChange(Trigger.new);
  }
}