<template>
  <div>
    <div
      class="card card-body mb-2"
      v-for="note in allNotes"
      :key="note.id"
    >
      <h3>{{ note.title }}</h3>
      <p>{{ note.content }}</p>

      <button @click="deleteNote(note.id)" class="btn btn-danger">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Notes",
  methods: {
    ...mapActions({
      fetchNotes: 'notes/fetchNotes',
      deleteNote: 'notes/deleteNote'
    })
  },
  computed: mapGetters({allNotes: 'notes/allNotes'}),
  created() {
    this.fetchNotes()
  }
};
</script>
