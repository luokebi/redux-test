var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', function (req, res) {
   res.render('index.ejs')
});




app.listen(3000, function() {
   console.log('Server start!');
});