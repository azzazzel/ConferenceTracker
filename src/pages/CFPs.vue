<template>
  <q-page padding>
    <q-timeline layout="comfortable">
      <q-timeline-entry
        v-for="cfp in cfps"
        v-bind:key="cfp.id"
        :title="editionByName(cfp.conference).conference"
        :subtitle="printDate(cfp)"
        side="left"
        :color="color(cfp)"
        icon="fas fa-flag-checkered"
      >
        <CFPCard
          :name="editionByName(cfp.conference).conference"
          :location="editionByName(cfp.conference).location"
          :websiteUrl="editionByName(cfp.conference).websiteUrl"
          :cfpUrl="cfp.cfpUrl"
          :date="eventDates(cfp)"
          :days="eventDays(cfp)"
          ></CFPCard>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<script>

import { mapGetters } from 'vuex'
import { date } from 'quasar'
import CFPCard from 'components/CFPCard'

export default {
  name: 'CFPs',
  components: {
    CFPCard
  },
  computed: {
    ...mapGetters({
      cfps: 'conferencesStore/upcomingCFPs',
      editionByName: 'conferencesStore/editionByName'
    })
  },

  methods: {
    printDate: function (cfp) {
      return date.formatDate(cfp.end, 'DD MMMM YYYY')
    },
    eventDates: function (cfp) {
      let event = this.editionByName(cfp.conference)
      if (event.start === event.end) {
        return date.formatDate(event.start, 'DD MMM')
      } else {
        return date.formatDate(event.start, 'DD MMM') + ' - ' + date.formatDate(event.end, 'DD MMM')
      }
    },
    eventDays: function (cfp) {
      let event = this.editionByName(cfp.conference)
      let days = (Math.round((new Date(event.end) - new Date(event.start)) / 8.64e7) + 1)
      return days + (days > 1 ? ' days' : ' day')
    },
    color: function (cfp) {
      if (cfp.color && cfp.color !== '') {
        return cfp.color
      }
      return this.$q.dark.isActive ? 'secondary' : 'primary'
    }
  }
}
</script>
