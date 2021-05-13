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
let serverInfo = {
  server: {
    name: "Fremont Bike Traffic",
    apiVersion: "0.2",
    baseUrl: 'https://data.seattle.gov/resource/65db-xm6k.json',
    attribution: {
      logo: '/logo.png', //This will be dynamically set to a fully qualified url based on the request headers
      link: 'https://data.seattle.gov/'
    }
  },
  availableDataSeries: {
    fremont_bridge_nb: {
      name: "Northbound Traffic",
      description: "Provides the number of northbound bikes crossing the Fremont Bridge",
    },
    fremont_bridge_sb: {
      name: "Southbound Traffic",
      description: "Provides the number of southbound bikes crossing the Fremont Bridge",
    }
  }
}

module.exports = {
  serverInfo
}