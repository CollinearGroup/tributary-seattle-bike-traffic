const axios = require('axios')
const baseUrl = require('./serverInfo').serverInfo.server.baseUrl 
const urlMap = require('./serverInfo').urlMap

function getTrafficByDay(day){
  day = day.split('T')[0]
  let formattedQuery = `/?$where=date between "${day}T00:00:00.000" and "${day}T23:00:00.000"`
  let url = baseUrl + formattedQuery
  return axios.get(`${url}`, headers={"X-App-Token": process.env.API_KEY})
    .then(res => {
      return res.data
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}



module.exports = {
  getTrafficByDay
}