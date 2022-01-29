<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <h2>Notes</h2>
      <AddNote />
      <Notes />
    </div>
  </div>
</template>

<script>
import Notes from "../components/Notes.vue";
import AddNote from "../components/AddNote.vue";

export default {
  middleware: 'auth',
  components: {
    Notes,
    AddNote
  },

  metaInfo () {
    return { title: this.$t('notes') }
  }
}
</script>
