function loadWord() {
  
  var currentDate = SpreadsheetApp.getActiveSheet().getRange(1, 2).getValue();
  var sheet = SpreadsheetApp.getActiveSheet();
  
  var lastRow = sheet.getLastRow();
  var nomorewords = 0;
  var lastseenmatch = sheet.getRange(4, 12).getValue();
  for (var i = lastseenmatch; i < lastRow; i++) { 
    var testWordDate = sheet.getRange(i, 6).getValue();
    if (testWordDate == currentDate) {
    var testWordGerman = sheet.getRange(i, 3).getValue();
    var testWordlevel = sheet.getRange(i, 5).getValue();
    
      sheet.getRange(4, 3).setValue(testWordGerman);
      sheet.getRange(4, 12).setValue(i);
      sheet.getRange(4, 10).setValue(testWordlevel);
      sheet.getRange(4, 11).setValue(testWordDate);
      nomorewords = 1;
      break;
    }
  } 
  if (nomorewords == 0) {
  sheet.getRange(4, 3).setValue('No more words for today');
  sheet.getRange(4, 12).setValue(9);
      
  }
  
}

function answer() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var testWordRow = SpreadsheetApp.getActiveSheet().getRange(4, 12).getValue();
  var testWordEnglish = SpreadsheetApp.getActiveSheet().getRange(testWordRow, 4).getValue();
  sheet.getRange(4, 4).setValue(testWordEnglish);
  
}


function levelDown() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var testWordRow = sheet.getRange(4, 12).getValue();
  var testWordlevel = sheet.getRange(4, 10).getValue();
  var testWordDate = sheet.getRange(4, 11).getValue();
  
  testWordDate++;
  sheet.getRange(testWordRow, 5).setValue(testWordlevel);
  sheet.getRange(testWordRow, 6).setValue(testWordDate);
  
  sheet.getRange(4, 3).clearContent();
  sheet.getRange(4, 4).clearContent();
  sheet.getRange(4, 10).clearContent();
  sheet.getRange(4, 11).clearContent();
}


function levelUp() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var testWordRow = sheet.getRange(4, 12).getValue();
  var testWordlevel = sheet.getRange(4, 10).getValue();
  var testWordDate = sheet.getRange(4, 11).getValue();
 
  
  switch (testWordlevel) {
    case 1:
        testWordDate += 2;
        break;
    case 2:
        testWordDate += 5;
        break;
    case 3:
        testWordDate += 8;
        break;
    case 4:
        testWordDate += 15;
        break;
    case 5:
        testWordDate += 30;
        break;
    case 6:
        testWordDate += 60;
        break;
}
  
  testWordlevel++;
  
  sheet.getRange(testWordRow, 5).setValue(testWordlevel);
  sheet.getRange(testWordRow, 6).setValue(testWordDate);
  
  sheet.getRange(4, 3).clearContent();
  sheet.getRange(4, 4).clearContent();
  sheet.getRange(4, 10).clearContent();
  sheet.getRange(4, 11).clearContent();
}

