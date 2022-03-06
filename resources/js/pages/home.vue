<template>
  <div class="row">
    <div class="col-lg-10 m-auto">
      <card :title="$t('home')">
        {{ $t('you_are_logged_in') }}
        Welecome {{ user.name }}!
      </card>

      <div class="row mt-4">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Create Some Notes</h5>
                <router-link class="btn btn-primary"  :to="{ name: 'notes' }">Notes</router-link>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Consult Shipping Rates</h5>
                <router-link class="btn btn-primary"  :to="{ name: 'rates' }">Rates</router-link>
            </div>
          </div>
        </div>
      </div>
      

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