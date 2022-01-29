<template>
  <div>
    <div
      class="card card-body mb-2"
      v-for="note in allNotes"
      :key="note.id"
    >
      <h3>{{ note.title }}</h3>
      <p>{{ note.content }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Notes",
  computed: mapGetters(["allNotes"])
};
</script>
