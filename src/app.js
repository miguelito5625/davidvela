// Realizando las importaciones
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars'); 
const session = require('express-session');
const validator = require('express-validator');
const passport = require('passport');
const flash = require('connect-flash');
const MySQLStore = require('express-mysql-session')(session);
const bodyParser = require('body-parser');

//Inicializations
const   app = express();


//Settings
app.set('port', process.env.PORT || 3000);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');


//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//app.use('/', userRoutes);

//Global variables
app.use((req, res, next) => {

    next();

});


//Public files
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));
app.use(require('./routes'));

//Public files
app.use(express.static(path.join(__dirname, 'public')));


//Starting server
const server = app.listen(app.get('port'), () => {
    console.log(`servidor en el puerto ${app.get('port')}`);
});