<template>
  <q-page padding>
    <ConferenceFilter />
    <div class="row justify-center q-gutter-none"
    >
      <div
        v-for="conference in conferences"
        v-bind:key="conference.name"
        class="col-12 col-sm-6 col-md-4"
        >
        <ConferenceCard
          :name="conference.name"
          :location="conference.location"
          :websiteUrl="conference.websiteUrl"
          :twitterUrl="conference.twitterUrl"
          ></ConferenceCard>
      </div>
    </div>
  </q-page>
</template>

<script>

import ConferenceFilter from 'components/ConferenceFilter'
import ConferenceCard from 'components/ConferenceCard'
import { mapGetters } from 'vuex'

export default {
  name: 'Conferences',
  components: { ConferenceCard, ConferenceFilter },
  computed: {
    ...mapGetters({
      conferences: 'conferencesStore/filteredConferences'
    })
  }
}
</script>
