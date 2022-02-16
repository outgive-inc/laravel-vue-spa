<template>

    <div class="form-data" style="display: inline-flex; justify-content: space-between;">
      <input
        type="checkbox"
        @change="updateCheck()"
        v-model="item.completed"
        class="flex-item"
       /><!-- generating checkbox and input field with a function updateCheck so data can will be updated after
       performing any action-->
      <span :class="[item.completed ? 'completed': '','itemText']">{{item.title}} {{item.content}}</span><!--
       checking and passing both title and content in input field and checking whether it is completed or not
       -->
      <button @click="removeItem()" class="trashcan" > <!-- generating button with onclick event and passing function
       to delete the item from database
       -->
      <font-awesome-icon icon="trash" />
      </button>
    </div>

</template>
<script>
   import axios from 'axios' //importing the axios
  export default {
    middleware: 'auth',
    props:['item'], //taking props
    methods: {
      updateCheck() {
        axios.put('api/notes/' + this.item.id, {
          item: this.item
        })//displaying data from routes
          .then(response => {
            if (response.status == 200) {
              this.$emit('itemchanged');
              //if everyting works fine status will be return as 200 and it will declared as the item is changed in the list
            }

          })
          .catch(error => {
            console.log(error);
          })
      },
      removeItem() {
        axios.delete('api/notes/' + this.item.id) //deleting the item using the id of the item

          .then(response =>{
            if(response.status == 200){
              this.$emit('itemchanged');
            }
          })
          .catch(error =>{
            console.log(error)
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
      return { title: this.$t('listItem') }
    },

  }
</script>
<style scoped>
  .completed{
    text-decoration: line-through;
    color: #999999;
    display: flex;
  }

  .form-data {
    height: auto;
    width: 100%;
    background: black;
  }

  .trashcan{
    background: #e6e6e6;
    border: none;
    color: #FF0000;
    outline: none;
  }
  .model-pr{

  }

</style>
