<template>
  <div>
    <form @submit.prevent="addNote" class="mb-3">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Title" v-model="note.title">
      </div>
      <div class="form-group">
        <textarea class="form-control" placeholder="Content" v-model="note.content"></textarea>
      </div>
      <button type="submit" class="btn btn-light btn-block">Save</button>
    </form>
    <button @click="clearForm()" class="btn btn-danger btn-block">Cancel</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddNote",
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    ...mapActions(["addNote"]),
    onSubmit(e) {
      e.preventDefault();
      this.addNote({
        "title": this.title,
        "content": this.content
      });
    }
  }
};
</script>
