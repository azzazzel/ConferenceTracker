<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="statics/icons/not_found.gif"
        style="max-width:300px;"
      >
    </p>
    <p class="text-faded">Sorry, nothing here...<strong>(404)</strong></p>
    <q-btn
      flat
      to="/"
      label="Go to website's home page"
    />
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
