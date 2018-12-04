const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.use('/api/todos', todoRoutes);

app.listen(port, () =>
	console.log(`Server is running on port ${port}...`)
);