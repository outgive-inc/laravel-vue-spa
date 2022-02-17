<template>
  <div class="row">
      <div class="col-lg-10 m-auto">
        <h1>TO DO List</h1>
      </div>
      <div class="heading">
        <h2 id="title">Add New Note</h2>
        <add-note
        v-on:reloadlist="getList()"/><!-- calling addnote.vue page and reloading list-->

      </div>
    <list-view :items="items"
    v-on:reloadlist="getList()"/><!-- calling listView.vue page and reloading list-->
    <div class="apiTask2">
      <APITask/> <!-- calling apitask.vue page and reloading list-->
    </div>
    
  </div>

</template>

<script>
  import AddNote from "./addnote" //importing addnote.vue
  import ListView from "./listView"//importing ListView.vue
  import APITask from "./apitask" //importing apitask.vue
  import axios from 'axios' //importing axios
import Apitask from './apitask.vue'

export default {
  middleware: 'auth',

  // async asyncData () {
  //   const { data: projects } = await axios.get('/api/projects')

  //   return {
  //     projects
  //   }
  // },
  components:{
    AddNote, //Generating component of addnote.vue
    ListView, //Generating component of ListView.vue
    APITask
    
  },
  data:function(){
    return{
      items: [] //getting items
    }
  },
  methods: {
    getList(){
      axios.get('api/notes') //getting list from routes
        .then(response =>{
          this.items = response.data
        })
        .catch(error=>{
          console.log(error) //generating error if data not fetched
        })
    }
  },
  created() {
    this.getList();
  },
  metaInfo () {
    return { title: this.$t('home') }
  },
}
</script>
<style scoped>
  .heading{
    background: #AEAEAE;
    padding: 10px;
    border-radius: 20px 20px;
    color: white;
  }
  .apiTask2{
    background: #AEAEAE;
    padding: 10px;
    border-radius: 20px 20px;
    color: white;
    margin-top: 50px;
  }
  #title
  {
    text-align: center;
  }
</style>
