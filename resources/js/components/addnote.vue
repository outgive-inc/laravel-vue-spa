<template>
  <div class="row-cols-auto">
    <div v-if="title" class="row-cols-auto">
      {{ title }}
    </div>

    <div class="note-form">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'addNote',

    props: {
      title: { type: String, default: null }
    }
  }
</script>
