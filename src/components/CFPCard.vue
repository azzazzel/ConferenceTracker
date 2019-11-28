<template>
  <q-toolbar>
    <country-flag class="vertical-middle" v-if="countryCode(location)" :country="countryCode(location)" size='normal'></country-flag>
    &nbsp; {{location}}

    <q-separator vertical inset class="q-mx-md"/>

    <q-icon size="sm" name="far fa-calendar-check" />
    &nbsp; {{date}}

    <q-separator v-if="cfpUrl" vertical inset class="q-mx-md"/>

    <q-btn
      flat
      v-if="cfpUrl"
      type="a"
      :href="cfpUrl"
      target="_blank"
      icon-right="far fa-paper-plane"
      label="Submit proposals"
    />
  </q-toolbar>
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
    cfpUrl: String,
    date: String
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
