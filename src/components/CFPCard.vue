<template>
    <div>
      <div class="col-12">
        <q-icon size="xs" name="far fa-calendar-check" />
        &nbsp; {{date}} ({{days}})
      </div>
      <div class="col-12">
        <country-flag class="vertical-middle" v-if="countryCode(location)" :country="countryCode(location)" size='small'></country-flag>
        &nbsp; {{location}}
      </div>
      <div class="col-12">
        <q-btn
          outline
          size="sm"
          v-if="cfpUrl"
          type="a"
          :href="cfpUrl"
          target="_blank"
          icon-right="far fa-paper-plane"
          label="Submit proposals"
        />
      </div>
    </div>
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
    date: String,
    days: String
  },
  data () {
    return {
    }
  },
  methods: {
    thumbnail: function () {
      return this.websiteUrl === undefined || this.websiteUrl === ''
        ? 'statics/community.jpg'
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
