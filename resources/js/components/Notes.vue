<template>
  <div>
    <div
      class="card mb-3"
      v-for="note in allNotes"
      :key="note.id"
    >
      <div class="card-body">
        <h3>{{ note.title }}</h3>
        <p>{{ note.content }}</p>

        <button @click="editHandler(note)" class="btn btn-warning">Edit</button>
        <button @click="deleteNote(note.id)" class="btn btn-danger">Delete</button>
      </div>
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
    }),
    editHandler(note) {
      this.moveUp();
      this.editNote(note);
    },
    moveUp(){
      window.scrollTo(0,0);
    }
  },
  computed: mapGetters({allNotes: 'notes/allNotes'}),
  created() {
    this.fetchNotes()
  }
};
</script>
