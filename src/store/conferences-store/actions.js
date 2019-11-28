var baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets/'
var key = 'AIzaSyB0gOtLzJZwuyuN7DJAVjbpp8VHF69q4GY'
var spreadsheetId = '1UEXmLwp8qEvvwBjiNQGSAB07QFSPVgD-10ieljAnevg'
var conferencesRegion = `Conferences!A2:H`
var citiesRegion = `Cities!A2:H`
var editionsRegion = `Conference editions!A2:F`
var cfpsRegion = `CFP!A2:D`

export function loadConferences (context) {
  var url = baseUrl + spreadsheetId + '/values/' + conferencesRegion + '?key=' + key + '&majorDimension=ROWS'
  fetch(url)
    .then(function (response) {
      return response.json()
    }).then(function (result) {
      var conferences = result.values.reduce(
        (acc, line) => {
          acc[line[1]] = {
            'family': line[0],
            'name': line[1],
            'location': line[2],
            'websiteUrl': line[3],
            'twitterUrl': line[4]
          }
          return acc
        },
        {}
      )
      context.commit('updateConferences', conferences)
    })
}

export function loadCities (context) {
  var url = baseUrl + spreadsheetId + '/values/' + citiesRegion + '?key=' + key + '&majorDimension=ROWS'
  fetch(url)
    .then(function (response) {
      return response.json()
    }).then(function (result) {
      var cities = result.values.reduce(
        (acc, line) => {
          acc[line[7]] = {
            'city': line[0],
            'country': line[4],
            'iso2': line[5],
            'iso3': line[6],
            'lat': line[2],
            'lng': line[3]
          }
          return acc
        },
        {}
      )
      context.commit('updateCities', cities)
    })
}

export function loadEditions (context) {
  var url = baseUrl + spreadsheetId + '/values/' + editionsRegion + '?key=' + key + '&majorDimension=ROWS'
  let id = 1
  fetch(url)
    .then(function (response) {
      return response.json()
    }).then(function (result) {
      var editions = result.values.reduce(
        (acc, line) => {
          acc[line[5]] = {
            'id': id++,
            'start': line[0],
            'end': line[1],
            'conference': line[2],
            'location': line[3],
            'websiteUrl': line[4]
          }
          return acc
        },
        {}
      )
      context.commit('updateEditions', editions)
    })
}

export function loadCFPs (context) {
  var url = baseUrl + spreadsheetId + '/values/' + cfpsRegion + '?key=' + key + '&majorDimension=ROWS'
  let id = 1
  fetch(url)
    .then(function (response) {
      return response.json()
    }).then(function (result) {
      var cfps = result.values.map(line => {
        return {
          'id': id++,
          'start': line[1],
          'end': line[2],
          'conference': line[0],
          'cfpUrl': line[3]
        }
      })
      context.commit('updateCFPs', cfps)
    })
}
