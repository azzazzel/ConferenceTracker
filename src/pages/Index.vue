<template>
  <q-page paddings class="q-pa-xl">
    <div class="row q-gutter-none">

      <!-- COLUMN 1 -->
      <div class="col-12 col-md-6 col-lg-4 q-pa-lg">
        <q-item class="stat-box">
          <q-item-section class="stat-text">
            <q-icon size="xl" name="far fa-calendar-alt"/>
            <q-item-label class="text-h4">Upcoming</q-item-label>
          </q-item-section>
          <q-item-section side top class="stat-count">
            <q-item-label class="text-h1">{{upcomingEditionsCount}}</q-item-label>
          </q-item-section>
          <q-item-section side >
            <q-chip square  class="full-width q-my-sm">
              <q-avatar size="md">{{currentEditionsCount}}</q-avatar>
              now
            </q-chip>
            <div class="full-width text-right ">
              past: <strong class="text-h6">{{pastEditionsCount}}</strong>
            </div>
            <div class="full-width text-right ">
              total: <strong class="text-h6">{{editionsCount}}</strong>
            </div>
          </q-item-section>
        </q-item>
        <div>
          <q-item>
            <q-item-section class="text-h6">
              Next
            </q-item-section>
            <q-item-section side style="width: 5rem;" class="text-center">
              Starts
            </q-item-section>
            <q-item-section side style="width: 4rem;">
              Duration
            </q-item-section>
          </q-item>
          <q-separator />
          <q-list dense>
            <q-item
              v-for="event in upcomingEvents"
              :key="event.id"
            >
              <q-item-section>
                <q-item-label>{{ event.conference }}</q-item-label>
              </q-item-section>
              <q-item-section side style="width: 5rem;">
                <q-item-label>
                  <q-chip dense icon="event">
                    {{ eventDates(event) }}
                  </q-chip>
                </q-item-label>
              </q-item-section>
              <q-item-section side style="width: 4rem;">
                <q-item-label >
                    {{ eventDays(event) }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <q-separator class="q-my-lg" />

        <q-item class="stat-box">
          <q-item-section class="stat-text">
            <q-icon size="xl" name="how_to_vote"/>
            <q-item-label class="text-h4">Open CFPs</q-item-label>
          </q-item-section>
          <q-item-section side top class="stat-count">
            <q-item-label class="text-h1">{{openCFPsCount}}</q-item-label>
          </q-item-section>
        </q-item>
        <div>
          <q-item>
            <q-item-section class="text-h6">
              Next
            </q-item-section>
            <q-item-section side style="width: 5rem;" class="text-center">
              Deadline
            </q-item-section>
            <q-item-section side style="width: 6rem;">
              Time left
            </q-item-section>
          </q-item>
          <q-separator />
          <q-list dense>
            <q-item
              v-for="cfp in openCFPs"
              :key="cfp.id"
            >
              <q-item-section>
                <q-item-label>{{ cfp.conference }}</q-item-label>
              </q-item-section>
              <q-item-section side style="width: 5rem;">
                <q-item-label>
                  <q-chip dense icon="event">
                    {{ cfpDeadline(cfp) }}
                  </q-chip>
                </q-item-label>
              </q-item-section>
              <q-item-section side style="width: 6rem;">
                <q-item-label >
                    {{ cfpDays(cfp) }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

      </div>

      <!-- COLUMN 2 -->
      <div class="col-12 col-md-6 col-lg-4 q-pa-lg">
        <q-item class="stat-box">
          <q-item-section class="stat-text">
            <q-icon size="xl" name="far fa-flag" />
            <q-item-label class="text-h4">Countries</q-item-label>
          </q-item-section>
          <q-item-section side top class="stat-count">
            <q-item-label class="text-h1">{{countriesCount}}</q-item-label>
          </q-item-section>
        </q-item>
        <div>
          <q-item>
            <q-item-section class="text-h6">
              Top10
            </q-item-section>
            <q-item-section side style="width: 7rem;">
              Conferences
            </q-item-section>
            <q-item-section side style="width: 4rem;">
              Events
             </q-item-section>
          </q-item>
          <q-separator />
          <q-list dense>
            <q-item
              v-for="record in byCountryStats"
              :key="record.country"
            >
              <q-item-section>
                <q-item-label>{{ record.country }}</q-item-label>
                <q-linear-progress  size="5px" :value="record.percent">
                </q-linear-progress>
              </q-item-section>
              <q-item-section side style="width: 7rem;">
                <q-item-label>
                  {{ record.conferences }}
                  ({{(record.percent * 100).toFixed(2) + '%'}})
                </q-item-label>
              </q-item-section>
              <q-item-section side style="width: 4rem;">
                <q-item-label>
                  {{ record.editions }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <q-separator class="q-my-lg" />

        <div>
          <q-item class="stat-box">
            <q-item-section class="stat-text">
              <q-icon size="xl" name="fas fa-map-marker-alt" />
              <q-item-label class="text-h4">Cities</q-item-label>
            </q-item-section>
            <q-item-section side top class="stat-count">
              <q-item-label class="text-h1">{{citiesCount}}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section class="text-h6">
              Top10
            </q-item-section>
            <q-item-section side style="width: 7rem;">
              Conferences
            </q-item-section>
            <q-item-section side style="width: 4rem;">
              Events
             </q-item-section>
          </q-item>

          <q-separator />

          <q-list dense>
            <q-item
              v-for="record in byCityStats"
              :key="record.city"
            >
              <q-item-section>
                <q-item-label>{{ record.city }}</q-item-label>
                <q-linear-progress  size="5px" :value="record.percent">
                </q-linear-progress>
              </q-item-section>
              <q-item-section side style="width: 7rem;">
                <q-item-label>
                  {{ record.conferences }}
                  ({{(record.percent * 100).toFixed(2) + '%'}})
                </q-item-label>
              </q-item-section>
              <q-item-section side style="width: 4rem;">
                <q-item-label>
                  {{ record.editions }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <!-- COLUMN 3 -->
      <div class="col-12 col-md-6 col-lg-4 q-pa-lg">
        <q-item class="stat-box">
          <q-item-section class="stat-text">
            <q-icon size="xl" name="group_work" class="text-left"/>
            <q-item-label class="text-left text-h4">Conference Families</q-item-label>
          </q-item-section>
          <q-item-section side class="stat-count">
            <q-item-label class="text-h1">{{conferencesCount}}</q-item-label>
          </q-item-section>
        </q-item>
        <div>
          <q-item>
            <q-item-section class="text-h6">
              Families
            </q-item-section>
            <q-item-section side style="width: 7rem;">
              Conferences
            </q-item-section>
          </q-item>
          <q-separator />
          <q-list dense>
            <q-item
              v-for="record in byFamilyStats"
              :key="record.family"
            >
              <q-item-section>
                <q-item-label>{{ record.family ? record.family : 'independent conferences' }}</q-item-label>
                <q-linear-progress  size="5px" :value="record.percent">
                </q-linear-progress>
              </q-item-section>
              <q-item-section side style="width: 7rem;">
                <q-item-label>
                  {{ record.conferences }}
                  ({{(record.percent * 100).toFixed(2) + '%'}})
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>

import { mapGetters } from 'vuex'
import { date } from 'quasar'

export default {
  name: 'PageIndex',

  data: function () {
    return {
    }
  },

  computed: {
    ...mapGetters({
      conferencesCount: 'conferencesStore/conferencesCount',
      editionsCount: 'conferencesStore/editionsCount',
      pastEditionsCount: 'conferencesStore/pastEditionsCount',
      currentEditionsCount: 'conferencesStore/currentEditionsCount',
      upcomingEditionsCount: 'conferencesStore/upcomingEditionsCount',
      countriesCount: 'conferencesStore/countriesCount',
      citiesCount: 'conferencesStore/citiesCount',
      byCountryStats: 'conferencesStore/byCountryStats',
      byCityStats: 'conferencesStore/byCityStats',
      byFamilyStats: 'conferencesStore/byFamilyStats',
      upcomingEvents: 'conferencesStore/upcomingEvents',
      openCFPs: 'conferencesStore/openCFPs',
      openCFPsCount: 'conferencesStore/openCFPsCount'
    })
  },

  methods: {
    eventDays: function (event) {
      let days = (Math.round((new Date(event.end) - new Date(event.start)) / 8.64e7) + 1)
      return days + (days > 1 ? ' days' : ' day')
    },
    eventDates: function (event) {
      return date.formatDate(event.start, 'DD MMM')
    },
    cfpDeadline: function (event) {
      return date.formatDate(event.end, 'DD MMM')
    },
    cfpDays: function (event) {
      let days = (Math.round((new Date(event.end) - new Date()) / 8.64e7) + 1)
      return days + (days > 1 ? ' days' : ' day')
    }
  }

}

</script>
