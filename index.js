// Require modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Require routes
const todoRoutes = require('./routes/todos');

// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/api/todos', todoRoutes);

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	app.use(express.static('client/build'));
	// Express will serve up the index.html file
	// if it doesn't recognize the route
	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
}

// Start the server
app.listen(process.env.PORT || 6000);
