# REACT-LIFE
REACT LIFE CYCLE

### :beetle: The Stack
* NodeJs - 
* Node Express - Restful API
* Axios - Async(promise based) Restful API request handler (w/ JSON formatter, XSRF)

* ReactJs, ReactDom, React-Route - component based UI library
* Redux - common state layer across mutiple components(dumb), containers (smart component)

* MongoDB - NOSQL non-schema, non relational DB
* Mongoose - ORM for Mongo
* RoboT3 - Mongo visual

* WebPack2 - Build tool, JS & CSS bundler
* Babel - ES6 transpiler

* JWT (JSON Web Token) - local Auth
* BCrypt - hashing encryption

* style-loader - Webpack loader that can load some CSS and inject it into the document via a <link> tag.
* css-loader - is the loader that can parse a CSS file and apply various transforms to it. Crucially it has a CSS Modules mode that can take our CSS and hash the classes as mentioned above

## :beetle: Steps To Install
* 1) cmd> mkdir app_name
* 2) cmd> npm init
* 3) cmd> npm install express --save
* 4) create index/app.js [create express RESTful api here]
* 5) create server.js [create node server here]
* 6) cmd> npm install --save  react react-dom
* 7) cmd> npm install --save-dev  babel-core babel-loader babel-preset-react
* 8) create .babelrc at root and paste { "presets": ["react"] }
* 9) cmd> npm install --save-dev webpack webpack-dev-server html-webpack-plugin

## :beetle: Build & Start the app
* To build the project: cmd> npm run build
* To start the server and run attached project app: cmd> npm run start

## :beetle: THE APP EXEC FLOW:
### ON CLIENT SIDE
* Header component loaded
* Footer component loaded
* userList loaded
* dashboard component loaded
* NotFound component loaded
* master root routes loaded
* master laytout loaded by route
* MasterLayout component loaded
* react app executed
### ON NODE SERVER
* express api controller loaded
* express api root router loaded
* react + express api root route added to server
* server started with webpack
* webpack.config loaded
* sever started on port:  3000

## :beetle: Authors
**Navid Mostafiz**