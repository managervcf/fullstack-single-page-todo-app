const express = require('express');
const app = express();
const port = process.env.PORT || 6000;
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/todos', todoRoutes);

app.listen(port, () => console.log(`Server starts on ${port}...`));
