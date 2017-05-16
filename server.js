/*jshint esversion: 6*/
const express = require('express');
const app = express();
const db = require('./models');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 9000;

//attaching middleware
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(methodOverride('_method'));

const apiRoutes = require('./api/index');
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`Listening on port ${PORT}`);
});