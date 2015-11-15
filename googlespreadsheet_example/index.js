
var GoogleSpreadsheet = require("google-spreadsheet");

// pull in our local config file
var config = require("./config.js");

// create the reference to our spreadsheet
var my_sheet = new GoogleSpreadsheet(config.SPREADSHEET_ID);

// pull in our local credentials
//var creds = require('./service_account_credentials.json');

// authenticate with google
my_sheet.useServiceAccountAuth(config, function(err){
    if (err) {
      throw err;
    }

    // getInfo returns info about the sheet and an array or "worksheet" objects
    my_sheet.getInfo( function( err, sheet_info ){
        if (err) {
          throw err;
        }
        console.log( sheet_info.title + ' is loaded' );
        // use worksheet object if you want to stop using the # in your calls

        var sheet1 = sheet_info.worksheets[0];
        sheet1.getRows( function( err, rows ){
          console.log("rows");
          console.log(rows);
            //rows[0].colname = 'new val';
            //rows[0].save(); //async and takes a callback
            //rows[0].del();  //async and takes a callback
        });
    });

    // column names are set by google and are based
  // on the header row (first row) of your sheet
    //my_sheet.addRow( 2, { colname: 'col value'} );

    //my_sheet.getRows( 2, {
        //start: 100,          // start index
        //num: 100,              // number of rows to pull
        //orderby: 'name'  // column to order results by
    //}, function(err, row_data){
        //// do something...
    //});
});
