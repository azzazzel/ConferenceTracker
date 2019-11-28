<template>
  <q-page padding>
    <daykeep-calendar-month
      :sunday-first-day-of-week="false"
      :event-array="calendarEvents"
      :allow-editing="false"
    >
    </daykeep-calendar-month>
  </q-page>
</template>

<script>

import { DaykeepCalendarMonth } from '@daykeep/calendar-quasar'
import { mapGetters } from 'vuex'
// import Vue from 'vue'

export default {
  name: 'Calendar',
  components: {
    DaykeepCalendarMonth
  },
  data: function () {
    return {
      localCalendarEvents: []
    }
  },
  computed: {
    ...mapGetters({
      editions: 'conferencesStore/allEditions',
      calendarEvents: 'conferencesStore/calendarEvents'
    })
  },
  watch: {
    editions: function (newValue, oldValue) {
    },
    calendarEvents: function (newValue, oldValue) {
      this.localCalendarEvents = newValue
    }
  },
  beforeUpdate () {
    this.localCalendarEvents = this.calendarEvents
  }
}
</script>
