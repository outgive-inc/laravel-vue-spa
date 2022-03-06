<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <card :title="$t('home')">
        {{ $t('you_are_logged_in') }}
        Welecome {{ user.name }}!
      </card>
      
  <!-- <router-link :to="{ name: 'note.edit' }">Edit Note</router-link> -->

      <notes />


    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import notes from './notes/notes.vue'


export default {

  components: {
    notes
  },

  middleware: 'auth',

  computed: mapGetters({
    user: 'auth/user'
  }),

  // async asyncData () {
  //   const { data: projects } = await axios.get('/api/projects')

  //   return {
  //     projects
  //   }
  // },

  metaInfo () {
    return { title: this.$t('home') }
  }
}
</script>

<style>
#headerCard{
  display: flex;
}
</style>