<template>
  <div>
    <div
      class="card card-body mb-2"
      v-for="note in allNotes"
      :key="note.id"
    >
      <h3>{{ note.title }}</h3>
      <p>{{ note.content }}</p>

      <button @click="editNote(note)" class="btn btn-warning mb-2">Edit</button>
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
      deleteNote: 'notes/deleteNote',
      editNote: 'notes/editNote'
    })
  },
  computed: mapGetters({allNotes: 'notes/allNotes'}),
  created() {
    this.fetchNotes()
  }
};
</script>
