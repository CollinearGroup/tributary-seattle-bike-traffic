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