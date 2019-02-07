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