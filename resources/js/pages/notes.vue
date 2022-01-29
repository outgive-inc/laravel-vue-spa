<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <h2>Notes</h2>
      <Notes />
    </div>
  </div>
</template>

<script>
import Notes from "../components/Notes.vue";

export default {
  middleware: 'auth',
  components: {
    Notes
  },

  metaInfo () {
    return { title: this.$t('notes') }
  }
}
</script>
