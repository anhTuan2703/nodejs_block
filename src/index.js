const express = require('express')
const path = require('path')
const morgan = require('morgan')
const hbs = require('express-handlebars')
const app = express()
const port = 3000


//HTTP Logger
app.use(morgan('combined'))

//Template Engine
app.engine('hbs', hbs.engine({
  extname : ".hbs"
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/page1', (req, res) => {
  res.render('page1');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})