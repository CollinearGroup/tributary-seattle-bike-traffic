let model = require('./model')
let serverInfo = require('./serverInfo')

function baseRoute(req, res){
  console.log(req.headers)
  res.json(serverInfo)
}

function checkSeries(req, res){ 
  let { date, northbound, southbound } = req.query
  if(!date && !northbound && !southbound){
    res.status(400).send({errors: "Date and/or direction parameter is required."})
    return 
  }
  
  model.getTrafficByDay(date)
    .then((seriesData) => {
      res.json(seriesData)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

module.exports = {
  baseRoute, 
  checkSeries
}