## Single Page Todo List

This project was built with React and Redux calling RESTful API created with Node, Express, MongoDB.

## Development

In development mode app uses local MongoDB database. To integrate your own database, create `dev.js` file inside `/config` directory and export an object including `databaseURL: <your database url>`.

To boot the app, run script `npm run dev` which the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Production

For deployed version, please visit [herokuapp.com](https://fullstack-single-page-todo-app.herokuapp.com/).