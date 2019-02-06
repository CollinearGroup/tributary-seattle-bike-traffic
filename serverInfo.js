let serverInfo = {
  server: {
    name: "Fremont Bridge Hourly Bicycle Counts by Month",
    apiVersion: "2.1",
    baseUrl:'https://data.seattle.gov/resource/65db-xm6k.json',
    attribution: {
      // logo: '/logo.png', //This will be dynamically set to a fully qualified url based on the request headers
      link: 'https://data.seattle.gov/resource/65db-xm6k.json'
    }
  },
  availableDataSeries: {
    northboundTraffic: {
      name: "Northbound Traffic",
      description: "Provides the number of northbound bikes crossing the Fremont Bridge",
      attributes: {
        name: "Direction",
        description: "Northbound bike traffic"
      }
    },
    southboundTraffic: {
      name: "Sounthbound Traffic",
      description: "Provides the number of southbound bikes crossing the Fremont Bridge",
      attributes: {
        name: "Direction",
        description: "Sounthbound bike traffic"
      }
    }
  }
}

let urlMap = { 
  "northboundTraffic": "fremont_bridge_nb",
  "southboundTraffic": "fremont_bridge_sb"
}

module.exports = {
  serverInfo,
  urlMap
}