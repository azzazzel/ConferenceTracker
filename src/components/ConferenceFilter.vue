<template>
  <div class="row q-px-lg q-mb-lg justify-end">

    <div class="col-12 col-sm-6 col-md-3 q-px-sm">
      <q-input dense outlined v-model="nameFilter" label="Name">
        <template v-slot:append>
          <q-icon name="close" @click="nameFilter = ''" class="cursor-pointer" />
        </template>
      </q-input>
    </div>

    <div class="col-12 col-sm-6 col-md-3 q-px-sm">
      <q-select dense outlined hide-selected fill-input use-input v-model="countryFilter" :options="countries" @filter="filterCountries" label="Country" >
        <template v-slot:append>
          <q-icon name="close" @click.stop="countryFilter = ''" class="cursor-pointer" />
        </template>
      </q-select>
    </div>

    <div class="col-12 col-sm-6 col-md-3 q-px-sm">
      <q-select dense outlined hide-selected fill-input use-input v-model="familyFilter" :options="families" @filter="filterFamilies" label="Family" >
        <template v-slot:append>
          <q-icon name="close" @click.stop="familyFilter = ''" class="cursor-pointer" />
        </template>
      </q-select>
    </div>

  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'ConferenceFilter',
  data () {
    return {
      countries: [],
      families: []
    }
  },
  computed: {
    nameFilter: {
      get () {
        return this.$store.state.conferencesStore.nameFilter
      },
      set (value) {
        this.$store.commit('conferencesStore/setNameFilter', value)
      }
    },
    countryFilter: {
      get () {
        return this.$store.state.conferencesStore.countryFilter
      },
      set (value) {
        this.$store.commit('conferencesStore/setCountryFilter', value)
      }
    },
    familyFilter: {
      get () {
        return this.$store.state.conferencesStore.familyFilter
      },
      set (value) {
        this.$store.commit('conferencesStore/setFamilyFilter', value)
      }
    },
    ...mapGetters({
      allCountries: 'conferencesStore/allCountries',
      allFamilies: 'conferencesStore/allFamilies'
    })
  },
  methods: {
    filterCountries: function (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.countries = this.allCountries.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },
    filterFamilies: function (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.families = this.allFamilies.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
  }

}
</script>
