function addhelperFormulas()
{
  var ss= SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var ws="Master Data Test";
  
  //Check if name is right
  if (ss.getName()==ws)
  {
    //Write the 4 helper formulas here
    ss.getRange("K2").setFormula('=if(F2="",,DATE(YEAR(F2),MONTH(F2),1))');
    ss.getRange("L2").setFormula('=if(Dashboard!$B$2=A2,TRUE,IF(Dashboard!$B$2="",TRUE,""))');
    ss.getRange("M2").setFormula('=if(Dashboard!$B$3=B2,TRUE,IF(Dashboard!$B$3="",TRUE,""))');
    ss.getRange("N2").setFormula('=if(Dashboard!$B$3=C2,TRUE,IF(Dashboard!$B$3="",TRUE,""))');
    ss.getRange("O2").setFormula('=if(OR(Dashboard!$B$3=B2,Dashboard!$B$3=C2),TRUE,IF(Dashboard!$B$3="",TRUE,""))');
    ss.getRange("P2").setFormula('=if(Dashboard!$B$4=G2,TRUE,IF(Dashboard!$B$4="",TRUE,""))');
    ss.getRange("Q2").setFormula('=if(Dashboard!$B$5=D2,TRUE,IF(Dashboard!$B$5="",TRUE,""))');
    ss.getRange("R2").setFormula('=if(Dashboard!$B$6=E2,TRUE,IF(Dashboard!$B$6="",TRUE,""))');

    //Helper class column number
    column_num=11;
    row_num=2;

    //Last row
    var lastrow=ss.getLastRow();
    var fillDownRange=ss.getRange(row_num,column_num,lastrow-1);
    ss.getRange("K2:R2").copyTo(fillDownRange);
    // templateRange.copyTo(targetRange, {formatOnly:true});
    // templateRange.copyTo(targetRange, SpreadsheetApp.CopyPasteType.PASTE_DATA_VALIDATION);
  }
  

}