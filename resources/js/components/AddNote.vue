<template>
  <div>
    <form @submit="onSubmit" class="my-3">
      <div class="form-group mb-2">
        <input type="text" class="form-control" placeholder="Title" v-model="title">
      </div>
      <div class="form-group mb-2">
        <textarea class="form-control" placeholder="Content" v-model="content"></textarea>
      </div>
      <input type="submit" class="btn btn-primary btn-block" value="Save" />
      <input type="button" @click="clearForm()" class="btn btn-danger btn-block" value="Cancel" />
    </form>
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
    ...mapActions({addNote: "notes/addNote"}),
    onSubmit(e) {
      e.preventDefault();
      this.addNote({
        "title": this.title,
        "content": this.content
      });
      this.clearForm();
    },
    clearForm() {
      this.title = '';
      this.content = '';
    }
  }
};
</script>
