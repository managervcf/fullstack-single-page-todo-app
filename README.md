## Single Page Todo List

This project was built with React and Redux communicating RESTful API created with Node, Express, MongoDB and Monngoose.

## Development

In the development mode, the app uses local MongoDB database. To integrate your own database, create a `dev.js` file inside `/config` directory and export an object including `databaseURL: <your database url>`.

Install dependencies using `npm i` both for server and client packages.

To boot the app in the development mode, run script `npm run dev`.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Production

For the deployed version, please visit [herokuapp.com](https://fullstack-single-page-todo-app.herokuapp.com/).
