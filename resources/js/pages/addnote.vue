<template>
  <div class="row-cols-auto">
    <h3>Add New Note</h3>
    <div class="col-lg-5">

      <input type="text" v-model="item.name" placeholder="Title"/><!-- Taking input Fields -->
      <input type="text" v-model="item.content"placeholder="description"/><!-- Taking input Fields -->
      <font-awesome-icon
        icon="plus-square"
        @click="addingnote()"
        :class="[item.name ? 'active' : 'inactive','plus']"
      /><!-- Declaring button with a font-awesome icon and a function to add note -->

    </div>


  </div>

</template>

<script>
  // importing the axios
  import axios from "axios";

  export default {
    middleware: 'auth',
//declaring the data that will be used
    data: function () {
      return {
        item: {
          name: "",
          content: ""
        }
      }
    },
    methods: {
      //adding the data to database and reloading page after addition
      addingnote() {
        if (this.item.name == '') {
          return;
        }
        if (this.item.content == '') {
          return;
        }
        axios.post('api/notes/store', {
          item: this.item
        })
          .then(response => {
            if (response.status == 201) {
              this.item.name = "",
              this.item.content = "";
              this.$emit('reloadlist');
            }
          })
          //Try catch to handel errors softly and checking each thing in console to verify errors
          .catch(error => {
            console.log(error);
          })
      },
    },

      // async asyncData () {
    //   const { data: projects } = await axios.get('/api/projects')

    //   return {
    //     projects
    //   }
    // },

    metaInfo () {
      return { title: this.$t('addnote') }
    },



  }
</script>
<style scoped>
  input[type="text"]{
    border-radius: 20px 20px;
    border: transparent;

  }input[type="text"]::placeholder{
    font-size: 18px;
    text-align: center;

  }
  .plus{
    font-size: 20px;
  }
  .active{
    color: black;
  }
  .inactive{
    color:wheat;
  }
</style>
