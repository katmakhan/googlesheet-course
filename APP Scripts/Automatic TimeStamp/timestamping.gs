function onEditProject(e) {
  addTimeStamp(e);
}


function addTimeStamp(e)
{
  var row=e.range.getRow();
  var col=e.range.getColumn();
  var startRow=2;
  var changingColumn=1;
  var timeStampColumn=6;
  var ws="Master Data";

  if(col === changingColumn && row>=startRow && e.source.getActiveSheet().getName()==ws)
  {
    var currentDate=new Date();
    //e.source.getActiveSheet().getRange(row,4).setValue(currentDate);

    //Check if already timestamped
    if(e.source.getActiveSheet().getRange(row,timeStampColumn).getValue()=="")
    {
      e.source.getActiveSheet().getRange(row,timeStampColumn).setValue(currentDate);
    }
  }
}