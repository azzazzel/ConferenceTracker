export function updateConferences (state, conferences) {
  state.conferences = conferences
}

export function updateCities (state, cities) {
  state.cities = cities
}

export function updateEditions (state, editions) {
  state.editions = editions
}

export function updateCFPs (state, cfps) {
  state.cfps = cfps
}

export function setNameFilter (state, nameFilter) {
  state.nameFilter = nameFilter
}

export function setCountryFilter (state, countryFilter) {
  state.countryFilter = countryFilter
}

export function setFamilyFilter (state, familyFilter) {
  state.familyFilter = familyFilter
}
