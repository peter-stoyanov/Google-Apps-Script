function manual_delete_mails() {  
    
  var labels = GmailApp.getUserLabels();
  
  for (var i = 0; i < labels.length; i++) {
        
    var label = labels[i];
    var labelname = label.getName();
    
    if (labelname.indexOf("EASYBUILD") > -1) {
    
      Logger.log("Deleting messages from label: " + label.getName());  
      
      var threads = label.getThreads();  
    
      for (var i = 0; i < threads.length; i++) {  
        
          threads[i].moveToTrash();
         
      }
      
    }
    
  }
}
