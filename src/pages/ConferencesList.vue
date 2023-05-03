<template>
  <q-page padding>
    <ConferenceFilter />
    <div class="row justify-left q-gutter-none">
      <div
        v-for="conference in conferences"
        v-bind:key="conference.name"
        class="col-12 col-sm-6 col-lg-3"
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
import ConferenceFilter from "components/ConferenceFilter.vue";
import ConferenceCard from "components/ConferenceCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "ConferencesList",
  components: { ConferenceCard, ConferenceFilter },
  computed: {
    ...mapGetters({
      conferences: "conferencesStore/filteredConferences",
    }),
  },
};
</script>
