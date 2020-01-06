const fs = require('fs');
const filePath = require('./config').filePath;

/*
This function is used to read the file. 
It first checks whether file exists or not.
If not -> raises An Error
If yes, then it return the list of string. String being the lines from the file
*/ 
function fetchData() {
    if (!fs.existsSync(filePath)) {
        throw('File Not found, Please Add required Customer.txt file');
    } 
    return fs.readFileSync(filePath).toString().split('\n');
}

module.exports = fetchData;