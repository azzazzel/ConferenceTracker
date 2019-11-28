<template>
      <q-item>
        <q-item-section top avatar class="q-ml-none">
          <img :src="thumbnail()">
        </q-item-section>

        <q-item-section>
          <country-flag v-if="countryCode(location)" :country="countryCode(location)" size='normal'></country-flag>
          <q-item-label class="text-h6">{{name}}</q-item-label>
          <q-item-label class="vertical-middle">
            {{location}}
          </q-item-label>
          <div>
            <q-btn round flat
              v-if="websiteUrl"
              class="q-ma-xs"
              icon="fas fa-home"
              type="a"
              target="_blank"
              :href="websiteUrl"/>
            <q-btn round flat
              v-if="twitterUrl"
              class="q-ma-xs"
              icon="fab fa-twitter"
              type="a"
              target="_blank"
              :href="twitterUrl"/>
          </div>
        </q-item-section>
      </q-item>
</template>

<script>

import CountryFlag from 'vue-country-flag'
import { mapGetters } from 'vuex'

export default {
  name: 'ConferenceCard',
  components: {
    'country-flag': CountryFlag
  },
  props: {
    name: String,
    location: String,
    websiteUrl: String,
    twitterUrl: String
  },
  data () {
    return {
    }
  },
  methods: {
    thumbnail: function () {
      return this.websiteUrl === undefined || this.websiteUrl === ''
        ? '/statics/community.jpg'
        : 'http://free.pagepeeker.com/v2/thumbs.php?size=l&url=' + this.websiteUrl
    }
  },
  computed: {
    ...mapGetters({
      countryCode: 'conferencesStore/countryCode2'
    })
  }
}
</script>

<style lang="scss">

  .q-item__section--avatar img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    opacity:0.9;
    filter: grayscale(50%)  saturate(70%);
    -webkit-filter: grayscale(50%) saturate(70%);
  }

  .q-item__section--avatar img:hover {
    filter: none;
    -webkit-filter: none;
  }
</style>
