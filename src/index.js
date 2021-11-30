const path = require('path'); 

const express = require('express');
const { engine } = require('express-handlebars');
// const morgan = require('morgan')
const app = express();
const route = require('./routes');
// HTTP LOGGER
// app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json()); 

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", path.resolve(__dirname, './resources/views'));
 
route(app); 

app.listen(3000, () => { 
    console.log('Server is running on port http://localhost:3000/');
});
 
// npm start
// npm run watch