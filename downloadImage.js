var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })

       .on('response', function (response) {
         console.log('Response Status Message: ', response.statusMessage)
         console.log(response.headers['content-type'])
         response.on('end', function(){
           console.log('Download complete.');
         })
       })

       .pipe(fs.createWriteStream('./future.jpg'))

       console.log('Downloading image...');
