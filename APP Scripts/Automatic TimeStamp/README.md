# To generate time stamp function inside google sheets

### Sample Main Function code
``` javascript
function onEditProject(e) {
	addTimeStamp(e);
}
```
### Sample Function Code for addTimeStamp
``` javascript
function addTimeStamp(e)
{
//paste code for generating time stamp
}

```

### Code for Generating time stamp
``` javascript
var row=e.range.getRow();
var col=e.range.getColumn();
var startRow=2;
var changingColumn=1;
var timeStampColumn=6;
var ws="Master Data";

//Checking if the changing column is in the desired range of rows
//Checking if the sheetname is also same
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

```