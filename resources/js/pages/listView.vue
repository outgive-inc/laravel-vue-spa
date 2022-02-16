<template>
  <div class="row">
    <div class="row-cols-md-5">
      <h3>List View</h3>
      </div>
    <div class="row-cols-lg-7">
    <div v-for="(item, index) in items" :key="index"><!-- taking v-for that work like a for each in php. it is
    helpfull when we are fetching the data from the database -->
      <list-item
        :item="item"
        class="item"
        v-on: itemchanged="$emit('reloadlist')"/> <!-- calling list item.vue page here so all data from that page
        will be displayed here -->
    </div>
    </div>
    <div>

    </div>
  </div>
</template>
<script>
  import axios from 'axios' //importing the axios
import ListItem from "./listItem"// importing the listitem page


  export default {
    middleware: 'auth', //checking the login status
    props:['items'], //passing the props
    components:{
      ListItem //Generating components of ListItem page

    },


    // async asyncData () {
    //   const { data: projects } = await axios.get('/api/projects')

    //   return {
    //     projects
    //   }
    // },

    metaInfo () {
      return { title: this.$t('listView') }
    },

  }
</script>
<style scoped>
  .item{
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
  }
</style>
