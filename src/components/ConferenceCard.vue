<template>
  <q-card flat bordered class="transparent q-ma-sm">
    <q-item class="q-pa-none">
      <q-item-section side class="q-ma-none">
        <img :src="thumbnail()" />
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-h6">
          {{ name }}
        </q-item-label>
        <q-item-label caption class="vertical-middle">
          <country-flag
            v-if="countryCode(location)"
            :country="countryCode(location)"
            size="small"
            class="vertical-middle"
          ></country-flag>
          {{ location }}
        </q-item-label>
      </q-item-section>

      <q-item-section side top class="q-ma-xs">
        <div>
          <q-btn
            flat
            size="sm"
            v-if="websiteUrl"
            icon="fas fa-external-link-alt"
            type="a"
            target="_blank"
            :href="websiteUrl"
          />
        </div>
        <div>
          <q-btn
            flat
            size="sm"
            v-if="twitterUrl"
            icon="fab fa-twitter"
            type="a"
            target="_blank"
            :href="twitterUrl"
          />
        </div>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
import CountryFlag from "vue-country-flag-next";
import { mapGetters } from "vuex";

export default {
  name: "ConferenceCard",
  components: {
    "country-flag": CountryFlag,
  },
  props: {
    name: String,
  },
  data() {
    return {};
  },
  methods: {
    thumbnail: function () {
      let cnf = this.conferenceByName(this.name);
      return cnf.websiteUrl === undefined || cnf.websiteUrl === ""
        ? "/community.jpg"
        : "http://free.pagepeeker.com/v2/thumbs.php?size=l&url=" +
            cnf.websiteUrl;
    },
  },
  computed: {
    ...mapGetters({
      countryCode: "conferencesStore/countryCode2",
      conferenceByName: "conferencesStore/conferenceByName",
    }),
    location: function () {
      return this.conferenceByName(this.name).location;
    },
    websiteUrl: function () {
      return this.conferenceByName(this.name).websiteUrl;
    },
    twitterUrl: function () {
      return this.conferenceByName(this.name).twitterUrl;
    },
  },
};
</script>

<style scoped lang="scss">
.q-item__section img {
  height: 70px;
  object-fit: cover;
  border-radius: 2%;
  opacity: 0.9;
  filter: grayscale(90%) saturate(190%) brightness(150%) opacity(40%);
  -webkit-filter: grayscale(90%) saturate(190%) brightness(150%) opacity(40%);
}

.q-item:hover img {
  filter: none;
  -webkit-filter: none;
}
</style>
