<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$store.dispatch('conferencesStore/loadConferences')
    this.$store.dispatch('conferencesStore/loadCities')
    this.$store.dispatch('conferencesStore/loadEditions')
    this.$store.dispatch('conferencesStore/loadCFPs')
  }
}
</script>
