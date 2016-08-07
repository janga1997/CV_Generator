/*var PDFDocument, doc, fs;

PDFDocument = require('pdfkit');

fs = require('fs');

doc = new PDFDocument;

doc.pipe(fs.createWriteStream('output.pdf'));

doc.font('fonts/PalatinoBold.ttf').fontSize(45).text('Some text with an embedded font!', 100, 100);

doc.addPage().fontSize(25).text('Here is some vector graphics...', 100, 100);

doc.save().moveTo(100, 150).lineTo(100, 250).lineTo(200, 250).fill("#FF3300");

doc.scale(0.6).translate(470, -380).path('M 250,75 L 323,301 131,161 369,161 177,301 z').fill('red', 'even-odd').restore();

doc.addPage().fillColor("blue").text('Here is a link!', 100, 100).underline(100, 100, 160, 27, {
  color: "#000000"
}).link(100, 100, 160, 27, 'http://google.com/');

doc.end();*/

var express = require('express');
// Create a new Express application.
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('static'));
app.get('/',
  function(req, res) { 
  	res.sendFile(path.join(__dirname + '/index.html'));
  });

io.on('connection', function (socket) {
	// body...
	socket.on('data', function (msg) {
		// body...
		console.log(msg);
	})
})

http.listen(3000);