const axios = require('axios')
const baseUrl = require('./serverInfo').serverInfo.server.baseUrl

async function getMaxDate() {
  return axios.get('https://data.seattle.gov/resource/65db-xm6k.json?$select=max(date)')
    .then((response) => {
      return new Date(response.data[0].max_date)
    })
    .catch((err) => { console.log(err) });
}

/**
 * Makes dates appropriate for the API
 * @param {Date} date  date to format
 * @returns {String} ISO formatted without timezone, eg "2018-11-01T23:00:00.000" 
 */
function formatDate(date) {
  let d = new Date(date)
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().replace("Z", '')
}

async function getTrafficData(direction) {
  let endDate = await getMaxDate()
  let startDate = new Date(endDate)
  startDate.setDate(startDate.getDate() - 90)
  let formattedQuery = `/?$where=date between "${formatDate(startDate)}" and "${formatDate(endDate)}"`
  console.log("formattedQuery", formattedQuery)
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

    response.initialDataSet = response.initialDataSet.sort((a, b) => {
      return a[0] - b[0]
    });

    console.log(response.initialDataSet)

    return response
  } catch (err) {
    console.log(err)
  }
}



module.exports = {
  getTrafficData
}