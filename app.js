require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const ip = process.env.IP || 'localhost';
const port = process.env.PORT || 3000;
const controller = require('./controller');
const model = require('./model');
const axios = require('axios')

app.use(cors())

// app.get('/logo', express.static(__dirname + '/logo.png'))
app.get('/', controller.baseRoute)
app.get('/api/:direction', controller.checkSeries)

app.listen(port, function () {
  console.log(`Fremont Bridge Server running at ${ip} ${port}`)
})

let latestDate 

axios.get('https://data.seattle.gov/resource/65db-xm6k.json?$select=max(date)')
  .then((response) => {
    latestDate = response.data[0].max_date
  })
  .catch((err) => { console.log(err) });
