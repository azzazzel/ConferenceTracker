<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
// import VueAnalytics from 'vue-analytics'
import { Loading } from "quasar";

export default defineComponent({
  name: "App",
  created() {
    Loading.show();
    let router = this.$router;
    // Vue.use(VueAnalytics, {
    //   id: 'UA-6858591-3',
    //   router,
    //   debug: {
    //     enabled: process.env.DEV
    //   }
    // })
    performance.mark("loadDataStart");
    this.$store.dispatch("conferencesStore/loadConferences");
    this.$store.dispatch("conferencesStore/loadCities");
    this.$store.dispatch("conferencesStore/loadEditions");
    this.$store.dispatch("conferencesStore/loadCFPs");
  },
});
</script>
