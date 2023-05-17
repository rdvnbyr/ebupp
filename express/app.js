const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
require('colors');

const use_morgan = require('./config/morgan');
const connect_mongodb = require('./config/db.mongo');

dotenv.config();
connect_mongodb();

const app = express();

// express configs
use_morgan(app);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views'));

// Define a route to render your EJS file
app.get('/', (req, res) => {
  res.render('index', { title: 'Express with EJS' });
});

app.listen(8000, () => {
  console.log('Server is up on port 8000');
});
