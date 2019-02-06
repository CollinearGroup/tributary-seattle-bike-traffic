let serverInfo = {
  server: {
    name: "Fremont Bridge Hourly Bicycle Counts by Month",
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
      attributes: {
        direction: {
          name: "Direction",
          description: "Northbound bike traffic"
        }
      }
    },
    fremont_bridge_sb: {
      name: "Sounthbound Traffic",
      description: "Provides the number of southbound bikes crossing the Fremont Bridge",
      attributes: {
        direction: {
          name: "Direction",
          description: "Sounthbound bike traffic"
        }
      }
    }
  }
}

module.exports = {
  serverInfo
}