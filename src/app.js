// Realizando las importaciones
const   express = require('express'),
        path = require('path'),
        morgan = require('morgan'),
        mysql = require('mysql'),
        myConnection = require('express-myconnection');

//Configurando el server
const   app = express();

const userRoutes =  require('./routes/user');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {

    host: '35.231.232.185',
    user: 'desarrollador',
    password: 'mariobross5625',
    port: '3306',
    database: 'davidvela'
}, 'single'));


app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes);


const server = app.listen(app.get('port'), () => {
    console.log(`servidor en el puerto ${app.get('port')}`);
});