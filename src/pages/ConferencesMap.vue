<template>
  <q-page padding>
    <ConferenceFilter />
    <div class="full-page-pannel">
      <l-map style="height: 95%; width: 100%" :zoom="zoom" :center="center">
        <l-tile-layer
          :url="url"
          :attribution="attribution"
          :opacity="opacity"
        ></l-tile-layer>
        <l-marker
          v-for="city in cityConferences"
          :key="city.location"
          :icon="icon"
          :lat-lng="city['lat-lng']"
        >
          <l-popup class="q-size-xl">
            <ConferenceCard
              v-for="event in city.events"
              :key="event"
              :name="event"
            ></ConferenceCard>
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </q-page>
</template>

<script>
import ConferenceFilter from "components/ConferenceFilter.vue";
import ConferenceCard from "components/ConferenceCard.vue";
import { mapGetters } from "vuex";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import { latLng, icon } from "leaflet";

export default {
  name: "ConferencesMap",
  components: {
    ConferenceFilter,
    ConferenceCard,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
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
        iconUrl: "/map_pins/1.png",
        iconSize: [32, 32],
      }),
    };
  },
  computed: {
    ...mapGetters({
      cityConferences: "conferencesStore/cityConferences",
    }),
    url: function () {
      return this.$q.dark.isActive
        ? "http://tile.stamen.com/toner/{z}/{x}/{y}.png"
        : "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png";
    },
  },
};
</script>

<style lang="scss">
@import "leaflet/dist/leaflet.css";

.leaflet-popup {
  width: 450px;
  .leaflet-popup-content {
    width: 400px !important;
  }
}

.body--dark {
  .leaflet-popup,
  .leaflet-popup-content-wrapper,
  .leaflet-popup-content {
    background-color: $dark;
  }
}
</style>
