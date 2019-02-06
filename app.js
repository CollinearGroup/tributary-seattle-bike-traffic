const express = require('express');
const app = express();
const cors = require('cors');
const ip = process.env.IP || 'localhost';
const port = process.env.PORT || 3004;
const controller = require('./controller');
const model = require('./model');

app.use(cors())

require('dotenv').config()

app.get('/', controller.baseRoute)
app.get('/api/:date', controller.checkSeries)

app.listen(port, function (){
  console.log(`Fremont Bridge Server running at ${ip} ${port}`)
})
