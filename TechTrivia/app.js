const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;


//handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//servir contenido estatico
app.use(express.static('public'));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})