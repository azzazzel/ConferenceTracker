<template>
  <q-layout view="hHh LPR fFf">

    <q-header elevated class="main-header">
      <q-toolbar>
        <q-btn
          dense flat round icon="menu"
          @click="left = !left"
          />

        <div class="text-h4 q-ma-md">
          <strong>Conference</strong> Tracker
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above
      id="leftPanel"
      v-model="left"
      side="left"
      :dark='$q.screen.lt.md ? true : false'
      :content-class='$q.screen.lt.md ? "bg-black" : "bg-transparent"'
      >
      <div class="full-height page-pannel">
      <q-list>

        <q-item clickable v-ripple
          active-class="active-page"
          to="/#"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-chart-bar" />
          </q-item-section>

          <q-item-section>Dashboard</q-item-section>
        </q-item>

        <q-separator inset class="q-mx-md"/>

        <q-item clickable v-ripple
          active-class="active-page"
          :to="{name: 'conferencesList'}"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-microphone-alt" />
          </q-item-section>

          <q-item-section>Conferences</q-item-section>
        </q-item>

        <q-item clickable v-ripple
          active-class="active-page"
          :to="{name: 'conferencesMap'}"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-map-marked-alt" />
          </q-item-section>

          <q-item-section>Map</q-item-section>
        </q-item>

        <q-item clickable v-ripple
          active-class="active-page"
          :to="{name: 'calendar'}"
        >
          <q-item-section avatar>
            <q-icon name="far fa-calendar-alt" />
          </q-item-section>

          <q-item-section>Calendar</q-item-section>
        </q-item>

        <q-item clickable v-ripple
          active-class="active-page"
          :to="{name: 'cfp'}"
        >
          <q-item-section avatar>
            <q-icon name="how_to_vote" />
          </q-item-section>

          <q-item-section>Call For Papers</q-item-section>
        </q-item>

        <q-separator inset class="q-mx-md"/>

        <q-item clickable v-ripple
          active-class="active-page"
          target="_blank"
          tag="a"
          :class="darkMode ? 'text-accent' : 'text-warning'"
          href='https://docs.google.com/spreadsheets/d/1UEXmLwp8qEvvwBjiNQGSAB07QFSPVgD-10ieljAnevg/edit#gid=0'
        >
          <q-item-section avatar>
            <q-icon name="fas fa-database" />
          </q-item-section>

          <q-item-section>View raw data <small>(Google spreadsheet)</small></q-item-section>
        </q-item>

        <q-item clickable v-ripple
          active-class="active-page"
          target="_blank"
          tag="a"
          :class="darkMode ? 'text-accent' : 'text-warning'"
          href='https://forms.gle/vFcWJKWtqD7NrxmZ8'
        >
          <q-item-section avatar>
            <q-icon name="far fa-edit">
            </q-icon>
          </q-item-section>

          <q-item-section>
            Suggest a new event <small>(Google Form)</small>
          </q-item-section>
        </q-item>

      </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="main-footer">
      <q-toolbar class="bg-transparent text-weight-light text-caption">
        <div>Brought to you by
          <q-chip dense square clickable @click="goto('http://milendyankov.com')">
            <q-avatar size=xs>
              <img
                style="-webkit-filter: grayscale(100%); filter: grayscale(100%);"
                src="statics/icons/milen.jpg">
            </q-avatar>
            Milen Dyankov
          </q-chip>
        </div>
        <q-separator vertical inset class="q-mx-md"/>
        <div>
          Made with
          <q-chip dense square clickable @click="goto('https://vuejs.org/')">
            <q-avatar size=xs>
              <img
                style="-webkit-filter: grayscale(100%); filter: grayscale(100%);"
                src="statics/icons/vue.png">
            </q-avatar>
            Vue.js
          </q-chip>
          and
          <q-chip dense square clickable @click="goto('https://quasar.dev/')">
            <q-avatar size=xs>
              <img
                style="-webkit-filter: grayscale(100%); filter: grayscale(100%);"
                src="statics/icons/quasar.png">
            </q-avatar>
            Quasar
          </q-chip>
        </div>

        <q-space></q-space>

        <q-toggle
          v-model="darkMode"
          label="Dark mode"
          color="primary"
        />

      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>

import { openURL } from 'quasar'

export default {
  data () {
    return {
      left: false
    }
  },
  computed: {
    darkMode: {
      get: function () {
        return this.$q.dark.isActive
      },
      set: function (value) {
        this.$q.dark.set(value)
      }
    }
  },
  methods: {
    goto: function (url) {
      openURL(url)
    }
  }

}
</script>
