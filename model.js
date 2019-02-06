const axios = require('axios')
const baseUrl = require('./serverInfo').serverInfo.server.baseUrl

async function getTrafficByDay(direction, start, end) {
  let startDate = start ? new Date(start).toISOString() : new Date()


  let formattedQuery = `/?$where=date between "${start}T00:00:00.000" and "${end}T23:00:00.000"`
  let url = baseUrl + formattedQuery
  let response = {
    units: {
      name: 'Bikes',
      description: 'Number of bikers',
      abbreviation: 'bks'
    },
    format: 'time',
    initialDataSet: []
  }
  
  try {
    let trafficData = await axios.get(`${baseUrl}`, headers = { "X-App-Token": process.env.API_KEY })
    trafficData.data.forEach(datum => {
      response.initialDataSet.push([
        new Date(datum.date).getTime(),
        datum[direction]
      ])
    })
    return response
  } catch (err) {
    res.status(400).send(err)
  }
}



module.exports = {
  getTrafficByDay
}