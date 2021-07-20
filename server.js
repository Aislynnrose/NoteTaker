const express = require('express');
const path = require('path');
const apiRoute = require('./Develop/routes/apiRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use('/api', apiRoute);
app.use('/', htmlRoutes);
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});