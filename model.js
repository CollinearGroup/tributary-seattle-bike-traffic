const axios = require('axios')
const baseUrl = require('./serverInfo').serverInfo.server.baseUrl

async function latestData(){
  return  axios.get('https://data.seattle.gov/resource/65db-xm6k.json?$select=max(date)')
  .then((response) => {
    return response.data[0].max_date
  })
  .catch((err) => { console.log(err) });
}

async function getTrafficData(direction, start, end) {
  let latestDate = await latestData()

  let startDate = start ? new Date(start).toISOString() : new Date(latestDate).toISOString()
  // TODO : handle default date range
  // currently we are assuming start and end are formatted correctly e.g 2018-02-22
  

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
    let trafficData = await axios.get(`${url}`, headers = { "X-App-Token": process.env.API_KEY })
    trafficData.data.forEach(datum => {
      response.initialDataSet.push([
        new Date(datum.date).getTime(),
        datum[direction]
      ])
    })
    return response
  } catch (err) {
   console.log(err)
  }
}



module.exports = {
  getTrafficData
}