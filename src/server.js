const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	const htmlPath = path.join(__dirname, 'public', 'index.html');
	res.sendFile(htmlPath);
  });

app.post('/new', (req, res) => {
	console.log(req.body);
});

app.set('port', process.env.PORT || 4100);
const server = app.listen(app.get('port'), () => {
	console.log(`Magic happening on → PORT ${server.address().port}`);
});