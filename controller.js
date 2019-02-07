let model = require('./model')
let serverInfo = require('./serverInfo').serverInfo
let latestDate = require('./app').latestDate

function baseRoute(req, res) {
  res.json(serverInfo)
}

async function checkSeries(req, res) {
  let { direction } = req.params
  if (!direction) {
    res.status(400).send({ errors: "Date and/or direction parameter is required." })
    return
  }

  let seriesData = await model.getTrafficData(direction)
  try {
    res.json(seriesData)
  } catch (err) {
    res.status(400).send(err)
  }
}

module.exports = {
  baseRoute,
  checkSeries
}