# Copy paste data validation Only in Google Sheets

Copy paste the data with certain constraints like datavalidation only, for enumerating the sheets with datavalidation

### Sample Code
```console
row_num=2;
column_num=15;

var ss= SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

var lastrow=ss.getLastRow();
var fillDownRange=ss.getRange(row_num,column_num,lastrow-1);
ss.getRange("K2:R2").copyTo(fillDownRange);
ss.getRange("K2:R2").copyTo(fillDownRange, SpreadsheetApp.CopyPasteType.PASTE_DATA_VALIDATION);

```