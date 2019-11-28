<template>
  <q-page padding>
      <div class="full-page-pannel">
        <l-map
          style="height: 100%; width: 100%"
          :zoom="zoom"
          :center="center"
          >
          <l-tile-layer
            :url="url"
            :attribution="attribution"
            :opacity="opacity"></l-tile-layer>
          <l-marker
            v-for="city in cityConferences"
            :key="city.location"
            :icon="icon"
            :lat-lng="city['lat-lng']"
            >
            <l-popup>
              <q-chip
                v-for="event in city.events"
                :key="event"
                class="full-width"
                >
                <q-avatar icon="bookmark" color="primary" text-color="white" />
                {{event}}
              </q-chip>
            </l-popup>
          </l-marker>
        </l-map>
      </div>
  </q-page>
</template>

<script>

import { mapGetters } from 'vuex'
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import { latLng, icon } from 'leaflet'

export default {
  name: 'ConferencesMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data: function () {
    return {
      zoom: 3,
      center: latLng(30, 0),
      attribution: `
        Light mode map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>.
        Dark mode map tiles by <a href="https://foundation.wikimedia.org/w/index.php?title=Maps_Terms_of_Use#Where_does_the_map_data_come_from.3F">Wikimedia</a>, under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.
        Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.`,
      opacity: 0.7,
      icon: icon({
        iconUrl: '/statics/map_pins/1.png',
        iconSize: [32, 32]
      })
    }
  },
  computed: {
    ...mapGetters({
      cities: 'conferencesStore/allCities',
      conferences: 'conferencesStore/allConferences',
      cityConferences: 'conferencesStore/cityConferences'
    }),
    url: function () {
      return this.$q.dark.isActive
        ? 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
        : 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'
    }
  }
}
</script>

<style>
  @import "~leaflet/dist/leaflet.css";
</style>
