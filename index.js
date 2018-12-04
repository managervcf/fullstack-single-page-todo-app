const express = require('express');
const app = express();
const port = process.env.PORT || 6000;
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/todos', todoRoutes);

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file!
	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => 
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	);
}
app.listen(port, () => console.log(`Server starts on ${port}...`));
