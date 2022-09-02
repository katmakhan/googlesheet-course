# Upload Files into Google Sheet

Upload files into google sheets and getting the link for future refference

- Give permission to Folder ID
- Give permission for the script to RUN

### code.gs
```javascript
function showDialog(){                                                     //for show the msg to the user
  var template = HtmlService.createTemplateFromFile("popmsg").evaluate();   //file html
  SpreadsheetApp.getUi().showModalDialog(template,"File Upload");           //Show to user, add title
}

function uploadFilesToGoogleDrive(data,name,type){                          //function to call on front side
  var datafile = Utilities.base64Decode(data)                               //decode data from Base64
  var blob2 = Utilities.newBlob(datafile, type, name);                      //create a new blob with decode data, name, type
  var folder = DriveApp.getFolderById("1mhjifoHLFlFez1dUGqwjQxJQxRiH3lkh"); //Get folder of destiny for file (final user need access before execution)
  var newFile = folder.createFile(blob2);                                   //Create new file (property of final user)
  
   var rowData = [                                                          //for print results
    newFile.getName(),
    newFile.getId(),
    newFile.getUrl(),
    newFile.getSize(),
    newFile.getDateCreated()
  ];
  SpreadsheetApp.getActive().getSheetByName("data").appendRow(rowData);     //print results
  
  return newFile.getUrl()                                                   //Return URL
}
```

### Popmsg.html

```html
<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
  </head>
  <body>

    <input type="file" id="file" >
    <input type="button" id="upload" value="Upload" class="action" onclick="uploadFiles()">
    <p id="msg"></p>
    
    <script >
      var fileUploader = document.getElementById("file");
      var msg = document.getElementById("msg");//for display msg
      function uploadFiles() { 
        msg.innerHTML = "Uploading file..."; //change msg text when is uploading
        var file = fileUploader.files[0];    //file
        var reader = new FileReader();       //reader for convert the file
        reader.readAsDataURL(file)           //convert file to Base64
        reader.onload = function() {         //necessary to access the result (promise)
          var rawLog = reader.result.split(',')[1];  //get only de Base64 part of file
          google.script.run                  
            .withSuccessHandler(function (a) {
              msg.innerHTML = "Uploaded at <a href="+a+" target='_blank'>"+a+"</a>" ;  //if success, change our msg
            })
            .uploadFilesToGoogleDrive(rawLog, file.name, file.type); // call the function in google side, and pass the data in Base64,name and type
        };
    }
    </script>
  </body>
</html>

```