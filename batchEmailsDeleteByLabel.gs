function batchEmailsDeleteByLabel() {  
    
  var startIndex = 0;
  var batchSize = 500;
  var batchOfThreads = GmailApp.getInboxThreads(startIndex, batchSize);
  
  while(batchOfThreads.length > 0) {
    
    var threadsToDelete = [];
    var labelsToDelete = [];
    
    for (var i = 0; i < batchOfThreads.length; i++) {
      
      var thread = batchOfThreads[i];
      
      var labels = thread.getLabels();
      
      for (var j = 0; j < labels.length; j++) {
        
        var label = labels[j];
        var labelname = label.getName();
        
        if (labelname.indexOf("EASYBUILD") > -1) {
          threadsToDelete.push(thread);
          labelsToDelete.push(label);
          break;
        }      
      }
      
    }
    
    GmailApp.moveThreadsToTrash(threadsToDelete);
    
    for (var k = 0; k < labelsToDelete.length; k++) {
      
      labelsToDelete[k].deleteLabel();
      
    }
    
    startIndex += 500;
    batchOfThreads = GmailApp.getInboxThreads(startIndex, batchSize);
  }
}


