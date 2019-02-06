const axios = require('axios')
const baseUrl = require('./serverInfo').serverInfo.server.baseUrl 
const urlMap = require('./serverInfo').urlMap

function getTrafficByDay(day){
  console.log(day)
  day = day.split('T')[0]
  let formattedDay = day + 'T00:00:00.000 and ' + day + 'T23:00:00.000'
// date between "2018-12-31T00:00:00.000" and "2018-12-31T23:00:00.000"
  return axios.get(`${baseUrl}/$where=date between ${formattedDay}`, params = {date:day}, headers={"X-App-Token": process.env.API_KEY})
    .then(res => {
      return res.data
    })
}



module.exports = {
  getTrafficByDay
}