<template>
  <div>
    <form @submit="onSubmit" class="my-3">
      <div class="form-group mb-2">
        <label for="title">Title <span class="text-danger">*</span></label>
        <input type="text" class="form-control" id="title" name="title" placeholder="Title" v-model="currentNote.title" required>
      </div>
      <div class="form-group mb-2">
        <label for="content">Content <span class="text-danger">*</span></label>
        <textarea class="form-control" id="content" name="content" placeholder="Content" v-model="currentNote.content" required></textarea>
      </div>
      <input type="submit" class="btn btn-primary btn-block" value="Save" />
      <input type="button" @click="clearForm()" class="btn btn-danger btn-block" value="Cancel" />
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AddNote",
  methods: {
    ...mapActions({
      addNote: "notes/addNote",
      updateNote: "notes/updateNote",
      clearForm: "notes/clearForm"
    }),
    onSubmit(e) {
      e.preventDefault();
      const noteToSave = {
        id: this.currentNote.id,
        title: this.currentNote.title,
        content: this.currentNote.content
      };
      if (this.editMode === false) {
        // Add
        this.addNote(noteToSave);
      } else {
        // Update
        this.updateNote(noteToSave);
      }
    }
  },
  computed: mapGetters({currentNote: 'notes/currentNote', editMode: 'notes/editMode'})
};
</script>
