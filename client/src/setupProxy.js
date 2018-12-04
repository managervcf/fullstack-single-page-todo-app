const proxy = require('http-proxy-middleware');

module.exports = app => {
	app.use(proxy('/api/todos', { target: 'http://localhost:6000' }));
	app.use(proxy('/api/todos/*', { target: 'http://localhost:6000' }));
};
