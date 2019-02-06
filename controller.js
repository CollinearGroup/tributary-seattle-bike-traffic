let model = require('./model')
let serverInfo = require('./serverInfo').serverInfo

function baseRoute(req, res) {
  console.log('server', serverInfo)
  res.json(serverInfo)
}

async function checkSeries(req, res) {
  let { direction } = req.params
  let { start, end } = req.query
  if (!direction) {
    res.status(400).send({ errors: "Date and/or direction parameter is required." })
    return
  }

  let seriesData = await model.getTrafficByDay(direction, start, end)
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