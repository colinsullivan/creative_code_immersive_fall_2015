This example demonstrates how to connect to a google spreadsheet from a Node.js server.  Google spreadsheets are an easy alternative to a fully-fledged database.

**Setting up Google Authentication**

1. Copy `config.js.example` to `config.js`
1. In `config.js`, update the spreadsheet id with the id of your spreadsheet.  You can get the spreadsheet ID from the URL: `https://docs.google.com/spreadsheets/d/<spreadsheet id>/edit#gid=0`
1. Add `config.js` to your .gitignore file so `config.js` wont be pushed to github (You should add `.gitignore` to your repository).
1. On the google credentials page, create a "Service account" credential.  It will download to your computer.
1. Add the contents of this file to `config.js`.
1. Now, look in `config.json` for the `client_email` field.  From the Google Spreadsheet GUI, share your spreadsheet with this special email address and give it "can edit" privileges.

**Running the Script**

    $ npm install
    $ node index.js

Should successfully connect to your spreadsheet and print the rows in it.

See the node-google-spreadsheet library for more info:

https://github.com/theoephraim/node-google-spreadsheet
