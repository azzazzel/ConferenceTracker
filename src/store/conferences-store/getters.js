import { Loading } from 'quasar'

const timelineStatus = {
  PAST: 'past',
  CURRENT: 'current',
  UPCOMMING: 'upcomming',
  UNKNOWN: 'unknown'
}

function getTimelineStatus(event) {
  let now = Date.now()
  let start = new Date(event.start)
  let end = new Date(event.end)

  if (end < now) return timelineStatus.PAST
  if (start > now) return timelineStatus.UPCOMMING
  if (start < now && now < end) return timelineStatus.CURRENT
  return timelineStatus.UNKNOWN
}

function filterByTimelineStatus(state, status) {
  return Object.values(state.editions).filter(
    edition => getTimelineStatus(edition) === status
  )
}

export function ready(state) {
  let ready = state.conferences && Object.values(state.conferences).length !== 0 &&
    state.editions && Object.values(state.editions).length !== 0 &&
    state.cities && Object.values(state.cities).length !== 0 &&
    state.cfps && Object.values(state.cfps).length !== 0

  if (ready) {
    Loading.hide()
  }

  return ready
}

export function filteredConferences(state) {
  if (!ready(state)) return {}
  let result = Object.values(state.conferences)
  if (state.nameFilter) {
    let regExp = new RegExp(state.nameFilter, 'i')
    result = result.filter(c => regExp.test(c.name))
  }
  if (state.countryFilter) {
    result = result.filter(c => {
      return c.location && state.cities[c.location].country === state.countryFilter
    })
  }
  if (state.familyFilter) {
    result = result.filter(c => {
      return c.family === state.familyFilter
    })
  }
  return result
}

export function conferencesCount(state) {
  return Object.values(state.conferences).length
}

export function allCities(state) {
  return state.cities
}

export function allCountries(state) {
  return [...new Set(
    Object.values(state.conferences)
      .filter(conference => conference.location)
      .map(conference => state.cities[conference.location].country)
  )].sort()
}

export function allFamilies(state) {
  return [...new Set(
    Object.values(state.conferences)
      .filter(conference => conference.family)
      .map(conference => conference.family)
  )].sort()
}

export function allEditions(state) {
  return Object.values(state.editions)
}

export function allCFPs(state) {
  return state.cfps
}

export function editionsCount(state) {
  return Object.values(state.editions).length
}

export function pastEditionsCount(state) {
  return filterByTimelineStatus(state, timelineStatus.PAST).length
}

export function upcomingEditionsCount(state) {
  return filterByTimelineStatus(state, timelineStatus.UPCOMMING).length
}

export function currentEditionsCount(state) {
  return filterByTimelineStatus(state, timelineStatus.CURRENT).length
}

export function byCountryStats(state) {
  if (!ready(state)) return {}
  let stats = {}
  Object.values(state.conferences).forEach(conference => {
    if (conference.location) {
      let country = state.cities[conference.location].country
      if (!stats[country]) stats[country] = { country: country, conferences: 0, editions: 0, percent: 0 }
      stats[country].conferences++
      stats[country].percent = stats[country].conferences / Object.values(state.conferences).length
    }
  })
  Object.values(state.editions).forEach(edition => {
    let country = state.cities[edition.location].country
    if (!stats[country]) stats[country] = { country: country, conferences: 0, editions: 0, percent: 0 }
    stats[country].editions++
  })
  return Object.values(stats)
    .sort((f, s) => s.conferences - f.conferences)
    .slice(0, 10)
}

export function byCityStats(state) {
  if (!ready(state)) return {}
  let stats = {}
  Object.values(state.conferences).forEach(conference => {
    if (conference.location) {
      let city = state.cities[conference.location].city
      if (!stats[city]) stats[city] = { city: city, conferences: 0, editions: 0, percent: 0 }
      stats[city].conferences++
      stats[city].percent = stats[city].conferences / Object.values(state.conferences).length
    }
  })
  Object.values(state.editions).forEach(edition => {
    let city = state.cities[edition.location].city
    if (!stats[city]) stats[city] = { country: city, conferences: 0, editions: 0, percent: 0 }
    stats[city].editions++
  })
  return Object.values(stats)
    .sort((f, s) => s.conferences - f.conferences)
    .slice(0, 10)
}

export function byFamilyStats(state) {
  if (!ready(state)) return {}
  let stats = {}
  Object.values(state.conferences).forEach(conference => {
    let family = conference.family ? conference.family : ''
    if (!stats[family]) stats[family] = { family: family, conferences: 0, percent: 0 }
    stats[family].conferences++
    stats[family].percent = stats[family].conferences / Object.values(state.conferences).length
  })
  return Object.values(stats)
    .sort((f, s) => s.conferences - f.conferences)
}

export function upcomingEvents(state) {
  if (!ready(state)) return {}
  return filterByTimelineStatus(state, timelineStatus.UPCOMMING)
    .sort((f, s) => new Date(f.start) - new Date(s.start))
    .slice(0, 10)
}

export function openCFPs(state) {
  if (!ready(state)) return {}
  return Object.values(state.cfps)
    .filter(cfp => new Date(cfp.end) > new Date())
    .sort((f, s) => new Date(f.end) - new Date(s.end))
    .slice(0, 10)
}

export function openCFPsCount(state) {
  if (!ready(state)) return 0
  return Object.values(state.cfps)
    .filter(cfp => new Date(cfp.end) > new Date())
    .length
}

export function countriesCount(state) {
  if (!ready(state)) return 0
  return new Set(Object.values(state.editions).map(edition => state.cities[edition.location].country)).size
}

export function citiesCount(state) {
  if (!ready(state)) return 0
  return new Set(Object.values(state.editions).map(edition => state.cities[edition.location].city)).size
}

export function cityConferences(state) {
  if (!ready(state)) return {}
  return filteredConferences(state).reduce(
    (acc, conference) => {
      if (conference.location && state.cities[conference.location].city != 'ONLINE') {
        acc[conference.location] = {
          'location': conference.location,
          'country': state.cities[conference.location].country,
          'city': state.cities[conference.location].city,
          'lat-lng': [state.cities[conference.location].lat, state.cities[conference.location].lng],
          'events': acc[conference.location] ? [...acc[conference.location].events, conference.name] : [conference.name]
        }
      }
      return acc
    },
    {}
  )
}

export function countryCode2(state) {
  return function (city) {
    return state.cities[city] ? state.cities[city].iso2 : ''
  }
}

export function calendarEvents(state) {
  if (!ready(state)) return []

  let events = Object.values(state.editions).map(edition => {
    let color
    switch (getTimelineStatus(edition)) {
      case timelineStatus.PAST: color = 'grey'; break
      case timelineStatus.CURRENT: color = 'accent'; break
      case timelineStatus.UPCOMMING: color = 'info'; break
    }
    let event = {
      id: 'EVENT_' + edition.id,
      summary: edition.conference,
      color: color,
      location: edition.location,
      description: '',
      start: {
        date: edition.start
      },
      end: {
        date: edition.end
      }
    }
    return event
  })

  let cfps = Object.values(state.cfps).map(cfp => {
    let color = 'negative'
    if (getTimelineStatus(cfp) === timelineStatus.PAST) {
      color = 'grey'
    }
    let event = {
      id: 'CFP_' + cfp.id,
      summary: 'CFP deadline - ' + state.editions[cfp.conference].conference,
      color: color,
      description: '',
      start: {
        date: cfp.end
      },
      end: {
        date: cfp.end
      }
    }
    return event
  })

  return [...events, ...cfps]
}

export function upcomingCFPs(state) {
  if (!ready(state)) return []
  let now = new Date()
  return state.cfps
    .filter(cfp => new Date(cfp.end) > now)
    .sort((f, s) => new Date(f.end) - new Date(s.end))
    .map(cfp => {
      let days = (Math.round((new Date(cfp.end) - now) / 8.64e7) + 1)
      return {
        ...cfp,
        'color': days < 3 ? 'red' : (days < 7 ? 'orange' : 'info')
      }
    })
}

export function conferenceByName(state) {
  return name => state.conferences[name]
}

export function editionByName(state) {
  return name => state.editions[name]
}

export function getNameFilter(state) {
  return state.nameFilter
}

export function getCountryFilter(state) {
  return state.countryFilter
}

export function getFamilyFilter(state) {
  return state.familyFilter
}
