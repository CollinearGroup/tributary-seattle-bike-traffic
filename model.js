//Tributary Project Seattle Data
// MIT License
//
// Copyright (C) 2021  Collinear Group, LLC
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// 
// See LICENSE in the project root for license information.
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
  let formattedQuery = `/?$where=date between "${formatDate(startDate)}" and "${formatDate(endDate)}"&$limit=100000`
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

    return response
  } catch (err) {
    console.log(err)
  }
}



module.exports = {
  getTrafficData
}