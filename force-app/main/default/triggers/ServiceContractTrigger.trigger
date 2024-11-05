trigger ServiceContractTrigger on ServiceContract(after update) {
  if (Trigger.isAfter && Trigger.isUpdate) {
    ServiceContractHandler.handleApprovalStatusChange(
      Trigger.new,
      Trigger.oldMap
    );
  }
}